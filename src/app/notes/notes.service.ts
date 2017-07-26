import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Note } from './note.model';

@Injectable()
export class NotesService {
  private notesUrl = 'api/notes';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});
 
  constructor(private http: Http) { }

  getNotes(): Promise<Note[]> {
    return this.http.get(this.notesUrl)
              .toPromise()
              .then(response => response.json().data as Note[])
              .catch(this.handleError);
  }

  getNote(id: number): Promise<Note> {
    const url = `${this.notesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Note)
      .catch(this.handleError);
  }

  update(note: Note): Promise<Note> {
    const url = `${this.notesUrl}/${note.id}`;
    return this.http
      .put(url, JSON.stringify(note), {headers: this.headers})
      .toPromise()
      .then(() => note)
      .catch(this.handleError);
  }

  create(note: Note): Promise<Note> {
    return this.http
      .post(this.notesUrl, JSON.stringify({attendee: note.attendee, task: note.task, value: note.value}), {headers: this.headers})
      .toPromise()
      .then(res => {
        console.log("res: ", res);
        
        res.json().data as Note
      })
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.notesUrl}/${id}`;
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