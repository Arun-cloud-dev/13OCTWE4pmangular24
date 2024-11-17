import { Component } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { CommonModule } from "@angular/common";


@Component ({
  selector: 'app-root',//markup
  standalone:true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports:[CommonModule, RouterOutlet, RouterLink, RouterLinkActive,HeaderComponent],

})

export class AppComponent{}
