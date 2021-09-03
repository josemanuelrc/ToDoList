import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskItemComponent } from './task-list/task-item/task-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ 
    TaskEditComponent,
    TaskListComponent,
    TaskItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    TaskEditComponent,
    TaskListComponent,
    TaskItemComponent
  ]
})
export class TaskModule { }
