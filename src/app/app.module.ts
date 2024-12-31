import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { TasksComponent } from './tasks/tasks.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';
import { TaskComponent } from './tasks/task/task.component';


 @NgModule({
  declarations: [
    /** Aqui se integran Modular Components */
    AppComponent
  ],
  bootstrap: [ AppComponent ],
  imports: [
    BrowserModule,
    /** Aqui se integran Standalone Components */
    HeaderComponent,
    UserComponent,
    TasksComponent,
    TaskComponent
  ]
})
export class AppModule { }
