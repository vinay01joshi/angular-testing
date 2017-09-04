import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosComponent } from './todos.component';
import { TodoService } from "./todo.service";
import { HttpModule } from "@angular/http";
import { Observable } from "rxjs";

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      declarations: [ TodosComponent ],
      providers: [ TodoService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();    
  });

  it('should load todos from the server', () => {
    let service = TestBed.get(TodoService);
    spyOn(service,'getTodos').and.returnValue(Observable.from([ [1,2,3] ] ));
    fixture.detectChanges();

    expect(component.todos.length).toBe(3);
  });
});
