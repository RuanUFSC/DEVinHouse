import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  task: string = '';
  taskList: string[] = [];
  addTodo() {
    if (this.task.length) {
      this.taskList.push(this.task);
      this.task = '';
    }
  }
}
