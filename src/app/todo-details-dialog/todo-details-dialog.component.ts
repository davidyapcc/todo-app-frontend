import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoService } from '../todo.service';
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-todo-details-dialog',
  templateUrl: './todo-details-dialog.component.html',
  styleUrls: ['./todo-details-dialog.component.css']
})
export class TodoDetailsDialogComponent {
  updateForm: FormGroup;
  statusOptions: string[] = ['New', 'In Progress', 'Completed'];

  constructor(
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<TodoDetailsDialogComponent>,
    private todoService: TodoService,
    private snackBar: MatSnackBar
  ) {
    this.updateForm = this.formBuilder.group({
      name: [data.name, Validators.required],
      description: [data.description, Validators.required],
      status: [data.status, Validators.required]
    });
  }

  updateTodo(): void {
    if (this.updateForm.valid) {
      const updatedTodo = this.updateForm.value;
      this.todoService.updateTodo(this.data.id, updatedTodo).subscribe(
        () => {
        this.dialogRef.close();
        this.showSuccessMessage('ToDo updated successfully!');
      },
      (error) => {
        console.error('Error updating ToDo:', error);
        this.showErrorMessage('Failed to update ToDo. Please try again.');
      });
    }
  }

  deleteTodo(): void {
    this.todoService.deleteTodo(this.data.id).subscribe(
      () => {
        this.dialogRef.close();
        this.showSuccessMessage('ToDo deleted successfully!');
      },
      (error) => {
        console.error('Error updating ToDo:', error);
        this.showErrorMessage('Failed to delete ToDo. Please try again.');
      });
  }

  private showSuccessMessage(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['success-snackbar']
    });
  }

  private showErrorMessage(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['error-snackbar']
    });
  }
}
