import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Attendee } from "./attendee.model";
import { AttendeesService } from "./attendees.service";

export class AttendeesDatabase {
  /** Stream that emits whenever the data has been modified. */
  dataChange: BehaviorSubject<Attendee[]> = new BehaviorSubject<Attendee[]>([]);
  get data(): Attendee[] { return this.dataChange.value; }

  constructor(private attendeesService: AttendeesService) {
    this.getAttendees();
  }

  getAttendees(): void {
    this.attendeesService.getAttendeees().then(attendees => {
      attendees.map(attendee => {
        const copiedData = this.data.slice();
        copiedData.push(attendee);
        this.dataChange.next(copiedData);
      });
    });
  }

  remove(id:number){
    this.dataChange.next(this.data.filter(h => h.id !== id));
  }
}