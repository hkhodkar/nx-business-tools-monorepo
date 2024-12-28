import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddExpenseTemplateDrivenFormComponent  } from './add-expense-td-form.component';

describe('AddExpenseTemplateDrivenFormComponent', () => {
  let component: AddExpenseTemplateDrivenFormComponent;
  let fixture: ComponentFixture<AddExpenseTemplateDrivenFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddExpenseTemplateDrivenFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddExpenseTemplateDrivenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
