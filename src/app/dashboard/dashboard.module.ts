import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { APIService } from './../api.service';
import { AttendeesService } from "./../attendees/attendees.service";

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from "./dashboard-routing.module";

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    InMemoryWebApiModule.forRoot(APIService)
  ],
  declarations: [
    DashboardComponent
  ],
  providers: [
    AttendeesService
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
