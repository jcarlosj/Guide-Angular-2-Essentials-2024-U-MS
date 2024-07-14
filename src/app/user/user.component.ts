import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({ required: true }) user!: {
    id: string;
    name: string;
    avatar: string
  };
  @Output() select = new EventEmitter<string>();

  get imagePath() {

    return 'assets/images/users/' + this.avatar;
  }

  onSelectUser() {
    console.log( 'Clicked ' + this.name + '!' );
    this.select.emit( this.id );
  }

}
