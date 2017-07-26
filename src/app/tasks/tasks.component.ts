import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataSource } from '@angular/cdk';
import { MdSort } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';

import { Task } from './task.model';
import { TasksService } from './tasks.service';
import { TasksDatabase } from './tasks.database';
import { TasksDataSource } from './tasks.datasource';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  displayedColumns = ['id', 'title', 'end_date', 'details', 'delete'];
  tasks = new TasksDatabase(this.tasksService);
  dataSource: TasksDataSource | null;

  constructor(private tasksService: TasksService, private router: Router) { }

  @ViewChild('filter') filter: ElementRef;
  @ViewChild(MdSort) sort: MdSort;

  ngOnInit() {
    this.dataSource = new TasksDataSource(this.tasks, this.sort);
    Observable.fromEvent(this.filter.nativeElement, 'keyup')
      .debounceTime(150)
      .distinctUntilChanged()
      .subscribe(() => {
        if (!this.dataSource) { return; }
        this.dataSource.filter = this.filter.nativeElement.value;
      });
  }

  gotoDetail(id: number): void {
    this.router.navigate(['/tasks', id]);
  }

  gotoAdd(): void {
    this.router.navigate(['/tasks/add']);
  }

  delete(id: number): void {
    this.tasksService
      .delete(id)
      .then(() => {
        this.tasks.remove(id);
      });
  }
}
