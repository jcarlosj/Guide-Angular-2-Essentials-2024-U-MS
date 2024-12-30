import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { DUMMY_TASKS } from '../dummy-tasks';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTaskData } from './task/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;

  isAddingTask: boolean = false;

  tasks = DUMMY_TASKS;

  get selectedUserTasks() {

    return this.tasks.filter( task => task.userId === this.userId );
  }

  onCompleteTask( id: string ) {
    this.tasks = this.tasks.filter( task => task.id !== id );
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onAddTask( newTask: NewTaskData ) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),    // Asignamos un ID aleatorio usando la clase Date
      userId: this.userId,                    // Asignamos el ID del usuario actual
      title: newTask.title,
      summary: newTask.summary,
      dueDate: newTask.date
    });

    this.isAddingTask = false;
  }

}
