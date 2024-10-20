import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-user';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})


export class UserComponent {

  selctedUser= DUMMY_USERS[randomIndex];

//getter
  get imagePath() {
    return 'assets/users/' + this.selctedUser.avatar
  }


  onSelectUser() {
    // console.log('Clicked');  create random on click
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selctedUser = DUMMY_USERS[randomIndex];
  }



}



