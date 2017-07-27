import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { AttendeesService } from "../attendees.service";
import { Attendee } from "../attendee.model";
import { TasksService } from "../../tasks/tasks.service";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  attendee: Attendee;

  constructor(
    private attendeesService: AttendeesService,
    private tasksService: TasksService,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.attendee = new Attendee();
  }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

  add(): void {
    this.tasksService.getTasks().then(tasks => {
      this.attendee.missing_tasks = tasks.length;
      this.attendee.delivered_tasks = 0;
      this.attendee.average_grade = 0;
      this.attendeesService.create(this.attendee).then(attendee => this.goBack());
    });
  }
}
