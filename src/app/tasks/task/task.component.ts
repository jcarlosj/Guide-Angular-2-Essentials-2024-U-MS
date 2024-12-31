import { Component, inject, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

import { CardComponent } from '../../shared/ui/card/card.component';

import { type Task } from './task.model';


@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;

  private tasksService = inject( TasksService );

  onCompleteTask() {
    this.tasksService.removeTask( this.task.id );
  }
}
