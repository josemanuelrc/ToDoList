import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { TaskItemComponent } from './tasks/task-list/task-item/task-item.component';

import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { TaskEditComponent } from './tasks/task-edit/task-edit.component';
import { FormsModule } from '@angular/forms';
import { TaskService } from './tasks/task.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TaskListComponent,
    TaskItemComponent,
    NavComponent,
    LoginComponent,
    TaskEditComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
