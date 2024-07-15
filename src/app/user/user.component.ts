import { Component, EventEmitter, Input, Output } from '@angular/core';

import { type  User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Output() select = new EventEmitter<string>();

  get imagePath() {

    return 'assets/images/users/' + this.user.avatar;
  }

  onSelectUser() {
    console.log( 'Clicked ' + this.user.name + '!' );
    this.select.emit( this.user.id );
  }

}
