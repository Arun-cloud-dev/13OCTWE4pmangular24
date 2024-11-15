import { Component } from "@angular/core";
import { HeaderComponent } from "./header/header.component";



@Component ({
  selector: 'app-root',//markup
  standalone:true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports:[HeaderComponent,],

})

export class AppComponent{}
