import { Component, OnInit } from '@angular/core';

import { Attendee } from "../attendees/attendee.model";
import { AttendeesService } from "../attendees/attendees.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  attendees: Attendee[] = [];

  constructor(private leaderBoardService: AttendeesService) { }

  ngOnInit(): void {
    this.leaderBoardService.getAttendeees()
      .then(attendees => {
        this.attendees = attendees.slice(1, 4)
      });
  }
}