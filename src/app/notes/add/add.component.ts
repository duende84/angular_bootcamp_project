import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { NotesService } from "../notes.service";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(
    private notesService: NotesService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

  add(attendee: string, task:string, value:number): void {
    attendee = attendee.trim();
    task = task.trim();
    if (!attendee || !task) { return; }
    this.notesService.create(attendee, task, value).then(note => this.goBack());
  }
}
