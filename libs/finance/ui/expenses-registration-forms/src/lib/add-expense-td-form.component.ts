import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { AddExpense } from './add-expense.interface';

@Component({
  selector: 'bt-libs-ui-add-expense-template-driven-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-expense-td-form.component.html',
  styleUrl: './add-expense-td-form.component.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class AddExpenseTemplateDrivenFormComponent {
  @ViewChild('addExpenseForm') form!: NgForm;
  @Input() expenseToAdd: AddExpense = {
    description: '',
    amountExclVat: null,
    vatPercentage: null,
    date: null,
  };

  @Output() addExpense = new EventEmitter<AddExpense>();

  onSubmit() {
    this.addExpense.emit(structuredClone(this.expenseToAdd));
    this.form.reset();
  }
}
