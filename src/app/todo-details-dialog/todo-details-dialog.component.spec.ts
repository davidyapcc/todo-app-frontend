import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDetailsDialogComponent } from './todo-details-dialog.component';

describe('TodoDetailsDialogComponent', () => {
  let component: TodoDetailsDialogComponent;
  let fixture: ComponentFixture<TodoDetailsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoDetailsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
