import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './home/home.component';
import { TaskEditComponent } from './tasks/task-edit/task-edit.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';

const routes: Routes = [
  {path:"", component: HomeComponent, pathMatch: "full"},
  {path:"new-task", component: TaskEditComponent, pathMatch: "full"},
  {path:"task-list", component: TaskListComponent, pathMatch: "full"},
  {path:"sign-in", component: RegisterComponent, pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
