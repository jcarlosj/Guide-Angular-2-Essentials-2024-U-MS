import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';



 @NgModule({
  declarations: [
    /** Aqui se integran Modular Components */
    AppComponent,
    HeaderComponent,
    UserComponent
  ],
  bootstrap: [ AppComponent ],
  imports: [
    BrowserModule,
    SharedModule,
    TasksModule
    /** Aqui se integran Standalone Components */
  ]
})
export class AppModule { }
