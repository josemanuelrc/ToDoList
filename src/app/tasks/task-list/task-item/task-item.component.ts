import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/shared/task.model';
import { TaskService } from '../../task.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  @Input() index: number;
  constructor(private taskService: TaskService) { 
  }

  ngOnInit(): void {
  }

  onFinishTask(){
    this.taskService.finishTask(this.index);
  }
}
