import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { TasksService } from "../tasks.service";
import { Task } from "../task.model";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  task: Task;

  constructor(
    private tasksService: TasksService,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.task = new Task();
  }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

  add(): void {
    this.tasksService.create(this.task).then(attendee => this.goBack());
  }
}
