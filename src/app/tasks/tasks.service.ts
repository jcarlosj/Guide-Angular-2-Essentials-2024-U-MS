import { Injectable } from '@angular/core';

import { DUMMY_TASKS } from '../dummy-tasks';
import { type NewTaskData } from './task/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private tasks = DUMMY_TASKS;

  constructor() {
    const tasks = localStorage.getItem( 'tasks' );

    if( tasks ) {
      this.tasks = JSON.parse( tasks );
    }
  }

  getUserTasks( userId: string ) {
    return this.tasks.filter( task => task.userId === userId );
  }

  addTask( newTask: NewTaskData, userId: string ) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),    // Asignamos un ID aleatorio usando la clase Date
      userId: userId,                         // Asignamos el ID del usuario actual
      title: newTask.title,
      summary: newTask.summary,
      dueDate: newTask.date
    });
    this.saveTasks();
  }

  removeTask( id: string ) {
    this.tasks = this.tasks.filter( task => task.id !== id );
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem( 'tasks', JSON.stringify( this.tasks ) );
  }
}
