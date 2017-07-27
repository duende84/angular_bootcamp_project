import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataSource } from '@angular/cdk';
import { MdSort } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';

import { Attendee } from './attendee.model';
import { AttendeesService } from './attendees.service';
import { AttendeesDatabase } from './attendees.database';
import { AttendeesDataSource } from './attendees.datasource';

@Component({
  selector: 'app-attendees',
  templateUrl: './attendees.component.html',
  styleUrls: ['./attendees.component.css']
})
export class AttendeesComponent implements OnInit {
  displayedColumns = ['id', 'photo', 'name', 'updated_at', 'details', 'delete'];
  attendees = new AttendeesDatabase(this.attendeesService);
  dataSource: AttendeesDataSource | null;

  constructor(private attendeesService: AttendeesService, private router: Router) { }

  @ViewChild('filter') filter: ElementRef;
  @ViewChild(MdSort) sort: MdSort;

  ngOnInit() {
    this.dataSource = new AttendeesDataSource(this.attendees, this.sort);
    Observable.fromEvent(this.filter.nativeElement, 'keyup')
      .debounceTime(150)
      .distinctUntilChanged()
      .subscribe(() => {
        if (!this.dataSource) { return; }
        this.dataSource.filter = this.filter.nativeElement.value;
      });
  }

  gotoDetail(id: number): void {
    this.router.navigate(['/attendees', id]);
  }

  gotoAdd(): void {
    this.router.navigate(['/attendees/add']);
  }

  delete(id: number): void {
    this.attendeesService
      .delete(id)
      .then(() => {
        this.attendees.remove(id);
      });
  }
}
