import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendeesComponent } from "./attendees.component";
import { DetailsComponent } from "./details/details.component";

const routes: Routes = [
   { path: 'attendees', component: AttendeesComponent },
   { path: 'detail/:id', component: DetailsComponent },
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AttendeesRoutingModule {}