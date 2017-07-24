import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttendeesComponent } from './attendees.component';
import { AttendeesRoutingModule } from "./attendees-routing.module";

@NgModule({
  imports: [
    CommonModule,
    AttendeesRoutingModule
  ],
  declarations: [
    AttendeesComponent
  ],
  exports: [
    AttendeesComponent
  ]
})
export class AttendeesModule { }
