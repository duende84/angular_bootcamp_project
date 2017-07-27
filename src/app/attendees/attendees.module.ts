import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkTableModule } from '@angular/cdk';
import { MdTableModule, MdSortModule, MdInputModule, MdButtonModule, MdNativeDateModule, MdCardModule } from '@angular/material';

import { APIService } from './../api.service';
import { AttendeesService } from "./attendees.service";

import { AttendeesComponent } from './attendees.component';
import { AttendeesRoutingModule } from "./attendees-routing.module";
import { DetailsComponent } from './details/details.component';
import { AddComponent } from './add/add.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    AttendeesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(APIService),
    BrowserAnimationsModule,
    CdkTableModule,
    MdTableModule,
    MdSortModule,
    MdInputModule,
    MdButtonModule,
    MdCardModule
  ],
  declarations: [
    AttendeesComponent,
    DetailsComponent,
    AddComponent
  ],
  providers: [
    AttendeesService
  ],
  exports: [
    AttendeesComponent
  ]
})
export class AttendeesModule { }
