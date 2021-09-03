import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { TaskService } from './tasks/task.service';
import { HomeComponent } from './home/home.component';
import { TaskModule } from './tasks/task.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TaskModule,
    AuthModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
