import { Component, Input } from '@angular/core';

import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { CardComponent } from "../shared/ui/card/card.component";

import { TasksService } from './tasks.service';

import { type NewTaskData } from './task/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent, CardComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;

  isAddingTask: boolean = false;

  /** Dependency Injection using constructor */
  constructor( private tasksService: TasksService ) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks( this.userId );
  }

  onCompleteTask( id: string ) {
    this.tasksService.removeTask( id );
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onAddTask( newTask: NewTaskData ) {
    this.tasksService.addTask( newTask, this.userId );

    this.isAddingTask = false;
  }

}
