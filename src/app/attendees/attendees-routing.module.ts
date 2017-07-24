import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendeesComponent } from "./attendees.component";

const routes: Routes = [
   { path: 'attendees', component: AttendeesComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AttendeesRoutingModule {}