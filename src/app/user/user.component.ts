import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  avatar = input.required<string>();
  name = input.required<string>();

  imagePath = computed( () => 'assets/images/users/' + this.avatar() );

  onSelectUser() {
    console.log( 'Clicked ' + this.name() + '!' );
  }

}
