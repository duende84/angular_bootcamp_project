import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from "./tasks.component";
import { DetailsComponent } from "./details/details.component";
import { AddComponent } from "./add/add.component";

const routes: Routes = [
   { path: 'tasks', component: TasksComponent },
   { path: 'tasks/add', component: AddComponent },
   { path: 'tasks/:id', component: DetailsComponent },
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class TasksRoutingModule {}