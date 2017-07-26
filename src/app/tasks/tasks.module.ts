import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

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
    FormsModule,
    TasksRoutingModule,
    InMemoryWebApiModule.forRoot(APIService)
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
