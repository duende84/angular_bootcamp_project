import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Attendee } from './attendee.model';
import { AttendeesService } from './attendees.service';

@Component({
  selector: 'app-attendees',
  templateUrl: './attendees.component.html',
  styleUrls: ['./attendees.component.css']
})
export class AttendeesComponent implements OnInit {
  attendees: Attendee[];
  selected: Attendee;

  constructor(private attendeesService: AttendeesService, private router: Router) { }

  ngOnInit(): void {
    this.getAttendees();
  }

  getAttendees(): void {
    this.attendeesService.getAttendeees().then(attendees => this.attendees = attendees);
  }

  onSelect(attendee: Attendee): void {
    this.selected = attendee;
  }

  gotoDetail(): void {
    this.router.navigate(['/attendees', this.selected.id]);
  }

  gotoAdd(): void {
    this.router.navigate(['/attendees/add']);
  }

  delete(attendee: Attendee): void {
    this.attendeesService
        .delete(attendee.id)
        .then(() => {
          this.attendees = this.attendees.filter(h => h !== attendee);
          if (this.selected === attendee) { this.selected = null; }
        });
  }
}
