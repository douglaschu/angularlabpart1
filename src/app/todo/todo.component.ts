import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/todo'; //interface
import { AllTodos } from '../todo-list'; //database, in variable

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos = Array<typeof AllTodos>;
  // const selectedTodo: Todo;

  markComplete(item: Todo): void {
    item.completed = true;
  }

  constructor() {}

  ngOnInit() {}
}
