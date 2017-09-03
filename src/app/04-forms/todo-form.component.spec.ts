import { FormBuilder } from '@angular/forms';
import { TodoFormComponent } from './todo-form.component'; 

describe('TodoFormComponent', () => {
  var component: TodoFormComponent; 

  beforeEach(() => {
    component = new TodoFormComponent(new FormBuilder());
  });

  it('should create a from with 2 control', () => {
    expect(component.form.contains('name')).toBeTruthy();           
    expect(component.form.contains('email')).toBeTruthy();           
  });

  it('shoud make the name control required', () => {
    let control = component.form.get('name');
    
    control.setValue('');

    expect(control.valid).toBeFalsy();
  });
});