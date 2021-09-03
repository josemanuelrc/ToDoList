import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/shared/task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {
  @Input() name: string;
  @Input() description: string;

  constructor(private taskService: TaskService) {

  }

  public ngOnInit(): void {
  }
  public onCreateTask(){
    this.taskService.createTask(new Task(this.name,this.description));
  }
}
