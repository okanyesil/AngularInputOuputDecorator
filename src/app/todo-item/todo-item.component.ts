import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input()
  todo: {title: string, body: string};

  constructor() { }

  ngOnInit(): void {
  }

}
