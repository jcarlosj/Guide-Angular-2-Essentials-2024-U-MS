import { Component, Input, output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  select = output<string>();

  get imagePath() {

    return 'assets/images/users/' + this.avatar;
  }

  onSelectUser() {
    console.log( 'Clicked ' + this.name + '!' );
    this.select.emit( this.id );
  }

}
