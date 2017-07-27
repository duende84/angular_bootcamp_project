import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { NotesService } from "../notes.service";
import { Note } from "../note.model";
import { AttendeesService } from "../../attendees/attendees.service";
import { Attendee } from "../../attendees/attendee.model";
import { TasksService } from "../../tasks/tasks.service";
import { Task } from "../../tasks/task.model";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  note: Note;
  attendees: Attendee[];
  tasks: Task[];

  constructor(
    private notesService: NotesService,
    private attendeesService: AttendeesService,
    private tasksService: TasksService,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.note = new Note();
  }

  ngOnInit() {
    this.attendeesService.getAttendeees().then(attendees => {
      this.attendees = attendees
    })

    this.tasksService.getTasks().then(tasks => {
      this.tasks = tasks;
    })
  }

  goBack(): void {
    this.location.back();
  }

  add(): void {
    this.notesService.create(this.note).then(note => this.goBack());
  }
}
