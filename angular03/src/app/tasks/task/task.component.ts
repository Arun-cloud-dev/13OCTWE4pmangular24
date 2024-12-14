import { Component, Input, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  
  @Output() complete = new EventEmitter<string>();

onComplete(){
  console.log("task complete");

}
  onCompleteTask(){
    this.complete.emit(this.task.id);
  }
}
