import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Task } from "./task.model";
import { TasksService } from "./tasks.service";

export class TasksDatabase {
  /** Stream that emits whenever the data has been modified. */
  dataChange: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>([]);
  get data(): Task[] { return this.dataChange.value; }

  constructor(private tasksService: TasksService) {
    this.getTasks();
  }

  getTasks(): void {
    this.tasksService.getTasks().then(tasks => {
      tasks.map(task => {
        const copiedData = this.data.slice();
        copiedData.push(task);
        this.dataChange.next(copiedData);
      });
    });
  }

  remove(id:number){
    this.dataChange.next(this.data.filter(h => h.id !== id));
  }
}