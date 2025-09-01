// import { Component, inject, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { todoservices } from './todo';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-root',
//   standalone: true, // nhớ thêm standalone
//   imports: [RouterOutlet, CommonModule], // thêm CommonModule
//   templateUrl: './app.html',
//   styleUrl: './app.css'
// })
// export class App {
//   protected readonly title = signal('todo-APP');
//   todos: any[] = [];

//   todoServices = inject(todoservices);

//   constructor() {
//     this.todoServices.get().subscribe(data => {
//       this.todos = data;
//     });
//   }
// }

import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoServices } from './todo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('Todo App');
  todos: any[] = [];
  newTitle: string = '';

  todoServices = inject(TodoServices);

  constructor() {
    this.loadTodos();
  }

  loadTodos() {
    this.todoServices.get().subscribe(data => {
      // map lại để đồng bộ
      this.todos = data.map(todo => ({
        id: todo.id,
        titile: todo.titile,   // phải giữ nguyên theo API
        isDone: todo.isDone
      }));
    });
  }

  addTodo() {
    if (!this.newTitle.trim()) return;
    const todo = { titile: this.newTitle, isDone: false }; // giữ nguyên 'titile'
    this.todoServices.add(todo).subscribe(() => {
      this.newTitle = '';
      this.loadTodos();
    });
  }

  toggleDone(todo: any) {
    const updated = { ...todo, isDone: !todo.isDone };
    this.todoServices.update(updated).subscribe(() => {
      this.loadTodos();
    });
  }

  deleteTodo(id: number) {
    this.todoServices.delete(id).subscribe(() => {
      this.loadTodos();
    });
  }
}
