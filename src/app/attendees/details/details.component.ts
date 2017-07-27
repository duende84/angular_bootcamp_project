import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Attendee } from './../attendee.model';
import { AttendeesService } from './../attendees.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() attendee: Attendee;

  constructor(
    private attendeesService: AttendeesService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.attendeesService.getAttendee(+params.get('id')))
      .subscribe(attendee => this.attendee = attendee);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.attendee.updated_at = Date.now();
    this.attendeesService.update(this.attendee)
      .then(() => this.goBack());
  }
}
