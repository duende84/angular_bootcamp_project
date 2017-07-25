import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { AttendeesService } from "../attendees.service";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(
    private attendeesService: AttendeesService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.attendeesService.create(name).then(attendee => this.goBack());
  }
}
