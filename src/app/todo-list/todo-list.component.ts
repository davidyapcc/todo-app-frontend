import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';
import { TodoService } from "../todo.service";
import { MatDialog } from '@angular/material/dialog';
import { TodoDetailsDialogComponent } from '../todo-details-dialog/todo-details-dialog.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoService: TodoService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.fetchTodos();
  }

  fetchTodos(): void {
    this.todoService.getTodos()
      .subscribe((todos: Todo[]) => {
        this.todos = todos;
      });
  }

  openTodoDetailsDialog(todo: Todo): void {
    const dialogRef = this.dialog.open(TodoDetailsDialogComponent, {
      width: '500px',
      data: todo
    });

    dialogRef.afterClosed().subscribe(result => {
      this.fetchTodos();
    });
  }
}
