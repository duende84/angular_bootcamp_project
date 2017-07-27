import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkTableModule } from '@angular/cdk';
import { MdTableModule, MdSortModule, MdInputModule, MdButtonModule, MdNativeDateModule, MdDatepickerModule, MdCardModule } from '@angular/material';

import { APIService } from './../api.service';
import { TasksService } from "./tasks.service";

import { TasksComponent } from './tasks.component';
import { TasksRoutingModule } from "./tasks-routing.module";
import { DetailsComponent } from './details/details.component';
import { AddComponent } from './add/add.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    TasksRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(APIService),
    BrowserAnimationsModule,
    CdkTableModule,
    MdTableModule,
    MdSortModule,
    MdInputModule,
    MdButtonModule,
    MdNativeDateModule,
    MdDatepickerModule,
    MdCardModule
  ],
  declarations: [
    TasksComponent,
    DetailsComponent,
    AddComponent
  ],
  providers: [
    TasksService
  ],
  exports: [
    TasksComponent
  ]
})
export class TasksModule { }
