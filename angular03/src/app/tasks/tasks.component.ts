import { Component , EventEmitter, Input, Output} from '@angular/core';
import { TaskComponent } from "./task/task.component";


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required:true}) name!:string;


  
selectedUsertasks: any;

  handleComplete(event : string){
    console.log("Task Complete:", event);
    //your own logic here

  }

}
