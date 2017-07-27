import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkTableModule } from '@angular/cdk';
import { MdTableModule, MdSortModule, MdInputModule, MdButtonModule, MdNativeDateModule, MdSelectModule, MdCardModule } from '@angular/material';

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
    NotesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(APIService),
    BrowserAnimationsModule,
    CdkTableModule,
    MdTableModule,
    MdSortModule,
    MdInputModule,
    MdButtonModule,
    MdSelectModule,
    MdCardModule
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
