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

  constructor(private attendeeService: AttendeesService, private router: Router) { }

  ngOnInit(): void {
    this.getAttendees();
  }

  getAttendees(): void {
    this.attendeeService.getAttendeees().then(attendees => this.attendees = attendees);
  }

  onSelect(attendee: Attendee): void {
    this.selected = attendee;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selected.id]);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.attendeeService.create(name)
      .then(attendee => {
        this.attendees.push(attendee);
        this.selected = null;
      });
  }

  delete(attendee: Attendee): void {
    this.attendeeService
        .delete(attendee.id)
        .then(() => {
          this.attendees = this.attendees.filter(h => h !== attendee);
          if (this.selected === attendee) { this.selected = null; }
        });
  }
}
