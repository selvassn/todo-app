import { Component, OnInit } from '@angular/core';
import {TodoService} from './todo.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showDialog = false;
  editingTodo: any = null;
  fieldValue = '';
  todoList: any = [];
  okButtonText = 'Create task';

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoList = [];
    this.getAllTodo();
}

  getAllTodo(){
    this.todoService.getAll()
        .map(res => res.json())
        .subscribe((todos) => {
          this.todoList = todos;
        });
  }

  todoDialog(todo = null) {
    this.okButtonText = 'Create task';
    this.fieldValue = '';
    this.editingTodo = todo;
    if (todo) {
      this.fieldValue = todo.title;
      this.okButtonText = 'Edit task';
    }
    this.showDialog = true;
  }

  remove(index: number) {
    let todo = this.todoList[index];
    this.todoService.delete(todo._id)
    .map(res => res.json())
    .subscribe((resTodo) => {
      this.todoList.splice(index, 1);
    });
  }

  editTodo(todo) {
    this.todoService.update(todo)
    .map(res => res.json())
    .subscribe((resTodo) => {
      if (!resTodo.ok) { return true; }
      this.editingTodo = todo;
      this.getAllTodo();
    });
  }

  updateTodo(title) {
    if (title) {
      title = title.trim();
      if (title && this.editingTodo) {
        this.editingTodo.title = title;
        this.editTodo(this.editingTodo);
      } else {
        this.addTodo(title);
      }
    }
    this.hideDialog();
  }

  addTodo(title) {
    let result;
      const todo = {title: title, completed: false};
            result = this.todoService.save(todo);
            result.subscribe(x => {
                // keep things in sync
                this.getAllTodo();
            });
  }

  hideDialog() {
    this.showDialog = false;
    this.editingTodo = null;
    this.fieldValue = null; // make sure Input is new
  }

}
