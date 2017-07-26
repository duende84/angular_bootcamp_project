import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { NotesService } from "../notes.service";
import { Note } from "../note.model";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  note: Note;

  constructor(
    private notesService: NotesService,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.note = new Note();
  }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

  add(): void {
    this.notesService.create(this.note).then(note => this.goBack());
  }
}
