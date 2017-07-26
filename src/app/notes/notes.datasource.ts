import { DataSource } from '@angular/cdk';
import { MdSort } from '@angular/material';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

import { NotesDatabase } from "./notes.database";
import { Note } from "./note.model";

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export class NotesDataSource extends DataSource<any> {
  _filterChange = new BehaviorSubject('');
  get filter(): string { return this._filterChange.value; }
  set filter(filter: string) { this._filterChange.next(filter); }

  constructor(private notesDatabase: NotesDatabase, private _sort: MdSort) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Note[]> {
    const displayDataChanges = [
      this.notesDatabase.dataChange,
      this._filterChange,
      this._sort.mdSortChange,
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      return this.getSortedFilterData();
    });
  }

  disconnect() { }

  getSortedFilterData(): Note[] {
    const data = this.notesDatabase.data.slice().filter((item: Note) => {
      let searchStr = (item.id.toString() + item.attendee + item.task + item.value).toLowerCase();
      return searchStr.indexOf(this.filter.toLowerCase()) != -1;
    });

    if (!this._sort.active || this._sort.direction == '') { return data; }

    return data.sort((a, b) => {
      let propertyA: number | string = '';
      let propertyB: number | string = '';

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