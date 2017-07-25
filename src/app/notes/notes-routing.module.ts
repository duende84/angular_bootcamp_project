import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesComponent } from "./notes.component";
import { DetailsComponent } from "./details/details.component";
import { AddComponent } from "./add/add.component";

const routes: Routes = [
   { path: 'notes', component: NotesComponent },
   { path: 'notes/add', component: AddComponent },
   { path: 'notes/:id', component: DetailsComponent },
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class NotesRoutingModule {}