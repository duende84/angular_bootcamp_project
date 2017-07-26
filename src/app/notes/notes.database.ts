import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Note } from "./note.model";
import { NotesService } from "./notes.service";

export class NotesDatabase {
  /** Stream that emits whenever the data has been modified. */
  dataChange: BehaviorSubject<Note[]> = new BehaviorSubject<Note[]>([]);
  get data(): Note[] { return this.dataChange.value; }

  constructor(private notesService: NotesService) {
    this.getNotes();
  }

  getNotes(): void {
    this.notesService.getNotes().then(notes => {
      notes.map(note => {
        const copiedData = this.data.slice();
        copiedData.push(note);
        this.dataChange.next(copiedData);
      });
    });
  }

  remove(id:number){
    this.dataChange.next(this.data.filter(h => h.id !== id));
  }
}