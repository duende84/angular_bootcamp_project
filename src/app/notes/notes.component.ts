import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataSource } from '@angular/cdk';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { MdSort } from '@angular/material';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';

import { Note } from './note.model';
import { NotesService } from './notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  notes: Note[];
  selected: Note;

  displayedColumns = ['id', 'task', 'attendee', 'value', 'details', 'delete'];
  exampleDatabase = new ExampleDatabase(this.notesService);
  dataSource: ExampleDataSource | null;

  constructor(private notesService: NotesService, private router: Router) { }

  @ViewChild('filter') filter: ElementRef;
  @ViewChild(MdSort) sort: MdSort;

  ngOnInit() {
    this.dataSource = new ExampleDataSource(this.exampleDatabase, this.sort);
    Observable.fromEvent(this.filter.nativeElement, 'keyup')
        .debounceTime(150)
        .distinctUntilChanged()
        .subscribe(() => {
          if (!this.dataSource) { return; }
          this.dataSource.filter = this.filter.nativeElement.value;
        });
  }

  gotoDetail(id:number): void {
    this.router.navigate(['/notes', id]);
  }

  gotoAdd(): void {
    this.router.navigate(['/notes/add']);
  }

  delete(id: number): void {
    this.notesService
        .delete(id)
        .then(() => {
          // this.notes = this.notes.filter(h => h.id !== id);
        });
  }
}

export class ExampleDatabase {
  /** Stream that emits whenever the data has been modified. */
  dataChange: BehaviorSubject<Note[]> = new BehaviorSubject<Note[]>([]);
  get data(): Note[] { return this.dataChange.value; }

  constructor(private notesService: NotesService) {
    this.getNotes();
  }

  getNotes(): void {
    this.notesService.getNotes().then(notes => {
      notes.map(note =>{
        const copiedData = this.data.slice();
        copiedData.push(note);
        this.dataChange.next(copiedData);
      });
    });
  }
}

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export class ExampleDataSource extends DataSource<any> {
  _filterChange = new BehaviorSubject('');
  get filter(): string { return this._filterChange.value; }
  set filter(filter: string) { this._filterChange.next(filter); }

  constructor(private _exampleDatabase: ExampleDatabase, private _sort: MdSort) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Note[]> {
    const displayDataChanges = [
      this._exampleDatabase.dataChange,
      this._filterChange,
      this._sort.mdSortChange,
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      return this.getSortedFilterData();
    });
  }

  disconnect() {}

  getSortedFilterData(): Note[] {
    const data = this._exampleDatabase.data.slice().filter((item: Note) => {
      let searchStr = (item.id.toString() + item.attendee + item.task + item.value).toLowerCase();
      return searchStr.indexOf(this.filter.toLowerCase()) != -1;
    });

    if (!this._sort.active || this._sort.direction == '') { return data; }

    return data.sort((a, b) => {
      let propertyA: number|string = '';
      let propertyB: number|string = '';

      switch (this._sort.active) {
        case 'id': [propertyA, propertyB] = [a.id, b.id]; break;
        case 'task': [propertyA, propertyB] = [a.task, b.task]; break;
        case 'attendee': [propertyA, propertyB] = [a.attendee, b.attendee]; break;
        case 'value': [propertyA, propertyB] = [a.value, b.value]; break;
      }

      let valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      let valueB = isNaN(+propertyB) ? propertyB : +propertyB;

      return (valueA < valueB ? -1 : 1) * (this._sort.direction == 'asc' ? 1 : -1);
    });
  }
}