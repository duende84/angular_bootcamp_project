import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendeesComponent } from "./attendees.component";
import { DetailsComponent } from "./details/details.component";
import { AddComponent } from "./add/add.component";

const routes: Routes = [
   { path: 'attendees', component: AttendeesComponent },
   { path: 'attendees/add', component: AddComponent },
   { path: 'attendees/:id', component: DetailsComponent },
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AttendeesRoutingModule {}