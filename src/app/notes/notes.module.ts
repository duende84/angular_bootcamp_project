import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { APIService } from './../api.service';
import { NotesService } from "./notes.service";

import { NotesComponent } from './notes.component';
import { NotesRoutingModule } from "./notes-routing.module";
import { DetailsComponent } from './details/details.component';
import { AddComponent } from './add/add.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    NotesRoutingModule,
    InMemoryWebApiModule.forRoot(APIService)
  ],
  declarations: [
    NotesComponent,
    DetailsComponent,
    AddComponent
  ],
  providers: [
    NotesService
  ],
  exports: [
    NotesComponent
  ]
})
export class NotesModule { }
