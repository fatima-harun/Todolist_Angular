import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { Todo } from '../class/todo';
@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  todoValue: string='';

  todoList: Todo[] = [
    {
     content:"Todo 1",
     value:false
  },
  {
    content:"Todo 2",
    value:false
 },
 {
  content:"Todo 3",
  value:false
},
];
  constructor(){}

  addtodo(){
    this.todoList.push({content:this.todoValue,value:false});
    this.todoValue = "";
  }
  changeTodo(){

  }
}
