import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddExpenseReactiveFormComponent } from './add-expense-reactive-form.component';

describe('AddExpenseReactiveFormComponent', () => {
  let component: AddExpenseReactiveFormComponent;
  let fixture: ComponentFixture<AddExpenseReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddExpenseReactiveFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddExpenseReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
