import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Attendee } from './attendee.model';

@Injectable()
export class AttendeesService {
  private attendeesUrl = 'api/attendees';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});
 
  constructor(private http: Http) { }

  getAttendeees(): Promise<Attendee[]> {
    return this.http.get(this.attendeesUrl)
              .toPromise()
              .then(response => response.json().data as Attendee[])
              .catch(this.handleError);
  }

  getAttendee(id: number): Promise<Attendee> {
    const url = `${this.attendeesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Attendee)
      .catch(this.handleError);
  }

  update(attendee: Attendee): Promise<Attendee> {
    const url = `${this.attendeesUrl}/${attendee.id}`;
    return this.http
      .put(url, JSON.stringify(attendee), {headers: this.headers})
      .toPromise()
      .then(() => attendee)
      .catch(this.handleError);
  }

  create(attendee: Attendee): Promise<Attendee> {
    return this.http
      .post(this.attendeesUrl, JSON.stringify({name: attendee.name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Attendee)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.attendeesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}