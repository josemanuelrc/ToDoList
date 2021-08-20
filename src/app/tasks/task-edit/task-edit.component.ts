import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/shared/task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {
  task: Task;

  constructor(private taskService: TaskService) {
    this.task=new Task("1","2");
  }

  public ngOnInit(): void {
  }
  public onCreateTask(){
    this.taskService.createTask(this.task);
  }
}
