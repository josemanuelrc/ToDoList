import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/shared/task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[];
  
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.tasks=this.taskService.getTasks();
  }

}
