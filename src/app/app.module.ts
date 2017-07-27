import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdTabsModule, MdToolbarModule } from "@angular/material";

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { AttendeesModule } from "./attendees/attendees.module";
import { NotesModule } from "./notes/notes.module";
import { TasksModule } from "./tasks/tasks.module";
import { DashboardModule } from "./dashboard/dashboard.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AttendeesModule,
    NotesModule,
    TasksModule,
    DashboardModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MdTabsModule,
    MdToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
