import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { todoservices } from './todo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true, // nhớ thêm standalone
  imports: [RouterOutlet, CommonModule], // thêm CommonModule
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('todo-APP');
  todos: any[] = [];

  todoServices = inject(todoservices);

  constructor() {
    this.todoServices.get().subscribe(data => {
      this.todos = data;
    });
  }
}
