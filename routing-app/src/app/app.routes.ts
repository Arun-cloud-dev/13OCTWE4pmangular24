import { Routes } from '@angular/router';
import {FirstComponent} from './first/first.component';
import {SecondComponent} from './second/second.component';
import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';


export const routes: Routes = [
  {path: 'first-component', component: FirstComponent },
  {path: 'second-component', component: SecondComponent },
  {path:'home', component:HomeComponent},
  {path:'contact', component:ContactComponent ,}
];
