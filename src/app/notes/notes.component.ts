import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataSource } from '@angular/cdk';
import { MdSort } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';

import { Note } from './note.model';
import { NotesService } from './notes.service';
import { NotesDatabase } from './notes.database';
import { NotesDataSource } from './notes.datasource';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  displayedColumns = ['id', 'task', 'attendee', 'value', 'details', 'delete'];
  notes = new NotesDatabase(this.notesService);
  dataSource: NotesDataSource | null;

  constructor(private notesService: NotesService, private router: Router) { }

  @ViewChild('filter') filter: ElementRef;
  @ViewChild(MdSort) sort: MdSort;

  ngOnInit() {
    this.dataSource = new NotesDataSource(this.notes, this.sort);
    Observable.fromEvent(this.filter.nativeElement, 'keyup')
      .debounceTime(150)
      .distinctUntilChanged()
      .subscribe(() => {
        if (!this.dataSource) { return; }
        this.dataSource.filter = this.filter.nativeElement.value;
      });
  }

  gotoDetail(id: number): void {
    this.router.navigate(['/notes', id]);
  }

  gotoAdd(): void {
    this.router.navigate(['/notes/add']);
  }

  delete(id: number): void {
    this.notesService
      .delete(id)
      .then(() => {
        this.notes.remove(id);
      });
  }
}