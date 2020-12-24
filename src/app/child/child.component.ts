import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Output()
  newItemEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  gonder(name) {
    this.newItemEvent.emit(name);
  }

}
