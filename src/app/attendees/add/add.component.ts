import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { AttendeesService } from "../attendees.service";
import { Attendee } from "../attendee.model";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  attendee: Attendee;

  constructor(
    private attendeesService: AttendeesService,
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
    this.attendeesService.create(this.attendee).then(attendee => this.goBack());
  }
}
