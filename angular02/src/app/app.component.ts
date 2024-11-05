import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent],
  // template:`<h1> arun teaches angular</h1>`,
  // styles: ['h1 { color:red; background-color:yellow; border:2px solid green; }'],



  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  title = 'angular02';
}
