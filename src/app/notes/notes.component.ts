import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Note } from './note.model';
import { NotesService } from './notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  notes: Note[];
  selected: Note;

  constructor(private notesService: NotesService, private router: Router) { }

  ngOnInit(): void {
    this.getNotes();
  }

  getNotes(): void {
    this.notesService.getNotes().then(notes => this.notes = notes);
  }

  onSelect(note: Note): void {
    this.selected = note;
  }

  gotoDetail(): void {
    this.router.navigate(['/notes', this.selected.id]);
  }

  gotoAdd(): void {
    this.router.navigate(['/notes/add']);
  }

  delete(note: Note): void {
    this.notesService
        .delete(note.id)
        .then(() => {
          this.notes = this.notes.filter(h => h !== note);
          if (this.selected === note) { this.selected = null; }
        });
  }
}
