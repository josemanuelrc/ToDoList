import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/shared/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[]=[
    new Task( "Tarea 1", "Tengo cosas que hacer"),
    new Task( "Tarea 2", "Tengo cosas que hacer"),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
