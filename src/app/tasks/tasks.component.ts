import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Task } from './task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[];
  selected: Task;

  constructor(private tasksService: TasksService, private router: Router) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.tasksService.getTasks().then(tasks => this.tasks = tasks);
  }

  onSelect(task: Task): void {
    this.selected = task;
  }

  gotoDetail(): void {
    this.router.navigate(['/tasks', this.selected.id]);
  }

  gotoAdd(): void {
    this.router.navigate(['/tasks/add']);
  }

  delete(task: Task): void {
    this.tasksService
        .delete(task.id)
        .then(() => {
          this.tasks = this.tasks.filter(h => h !== task);
          if (this.selected === task) { this.selected = null; }
        });
  }
}
