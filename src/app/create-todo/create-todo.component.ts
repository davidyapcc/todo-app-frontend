import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from '../models/todo.model';
import { TodoService } from '../todo.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent {
  statusOptions: string[] = ['New', 'In Progress', 'Completed'];

  constructor(private todoService: TodoService, private snackBar: MatSnackBar) { }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      const newTodo: Todo = form.value as Todo;
      this.todoService.createTodo(newTodo).subscribe(
        () => {
          form.resetForm(); // Clear the form after successful submission
          this.showSuccessMessage('ToDo created successfully!');
        },
        (error) => {
          console.error('Error creating ToDo:', error); // Log the error for debugging
          this.showErrorMessage('Failed to create ToDo. Please try again.');
        }
      );
    }
  }

  private showSuccessMessage(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000, // Duration the message will be shown (in milliseconds)
      horizontalPosition: 'center', // Position of the snackbar
      verticalPosition: 'top', // Position of the snackbar
      panelClass: ['success-snackbar'] // Optional CSS class for styling
    });
  }

  private showErrorMessage(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 5000, // Duration the message will be shown (in milliseconds)
      horizontalPosition: 'center', // Position of the snackbar
      verticalPosition: 'top', // Position of the snackbar
      panelClass: ['error-snackbar'] // Optional CSS class for styling
    });
  }
}
