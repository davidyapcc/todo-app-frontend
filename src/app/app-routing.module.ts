import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from "./todo-list/todo-list.component";
import { CreateTodoComponent } from "./create-todo/create-todo.component";

const routes: Routes = [
  { path: '', component: TodoListComponent },
  { path: 'create-todo', component: CreateTodoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
