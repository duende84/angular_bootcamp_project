import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { TasksService } from "../tasks.service";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(
    private tasksService: TasksService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

  add(title: string, end_date:string): void {
    title = title.trim();
    end_date = end_date.trim();
    if (!title || !end_date) { return; }
    this.tasksService.create(title, end_date).then(attendee => this.goBack());
  }
}
