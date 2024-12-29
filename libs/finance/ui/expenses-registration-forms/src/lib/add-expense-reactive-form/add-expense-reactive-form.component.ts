import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddExpenseReactive } from '../add-expense.interface';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { maxWordCountValidator } from '@bt-libs/shared/util/form-validators';

@Component({
  selector: 'bt-libs-ui-add-expense-reactive-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-expense-reactive-form.component.html',
  styleUrl: './add-expense-reactive-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddExpenseReactiveFormComponent {
  @Input()
  public set expenseToAdd(value: AddExpenseReactive) {
    this.addExpenseForm.patchValue(value);

    this.addExpenseForm.controls.tags.clear();
    value.tags?.forEach(tag => {
      this.addExpenseForm.controls.tags.push(new FormControl(tag));
    });
  }

  @Output() addExpense = new EventEmitter<AddExpenseReactive>();

  addExpenseForm = new FormGroup({
    description: new FormControl('',Validators.compose([Validators.required, maxWordCountValidator(4)])),
    amount: new FormGroup({
      amountExclVat: new FormControl<number | null>(null, [Validators.required]),
      vatPercentage: new FormControl<number | null>(null, [Validators.required, Validators.min(0), Validators.max(100)]),
    }),
    date: new FormControl([''], [Validators.required]),
    tags: new FormArray([
      new FormControl(''),
    ])
  });

  addTag() {
    this.addExpenseForm.controls.tags.insert(0, new FormControl(''));
  }

  removeTag(index: number) {
    this.addExpenseForm.controls.tags.removeAt(index);
  }

  onSubmit() {
    this.addExpense.emit(structuredClone(this.addExpenseForm.value as AddExpenseReactive));
    this.addExpenseForm.reset();
  }
}
