import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-all-todos',
  templateUrl: './list-all-todos.component.html',
  styleUrls: ['./list-all-todos.component.css']
})
export class ListAllTodosComponent implements OnInit {
  todos: {title: string, body: string}[] = [];

  constructor() { }

  ngOnInit(): void {
    this.todos.push({title: 'todo1', body: 'yapılacak1'});
    this.todos.push({title: 'todo2', body: 'yapılacak2'});
    this.todos.push({title: 'todo3', body: 'yapılacak3'});
  }

}
