import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllTodosComponent } from './list-all-todos.component';

describe('ListAllTodosComponent', () => {
  let component: ListAllTodosComponent;
  let fixture: ComponentFixture<ListAllTodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAllTodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
