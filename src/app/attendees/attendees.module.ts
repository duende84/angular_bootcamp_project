import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

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
    FormsModule,
    AttendeesRoutingModule,
    InMemoryWebApiModule.forRoot(APIService)
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
