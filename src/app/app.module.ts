import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { TasksComponent } from './tasks/tasks.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';
import { TaskComponent } from './tasks/task/task.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { SharedModule } from './shared/shared.module';



 @NgModule({
  declarations: [
    /** Aqui se integran Modular Components */
    AppComponent,
    HeaderComponent,
    UserComponent,
    TasksComponent,
    TaskComponent,
    NewTaskComponent
  ],
  bootstrap: [ AppComponent ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule
    /** Aqui se integran Standalone Components */
  ]
})
export class AppModule { }
