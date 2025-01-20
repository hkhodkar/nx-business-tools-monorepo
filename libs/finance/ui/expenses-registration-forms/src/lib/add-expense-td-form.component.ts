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
import { MaxWordCountDirective } from '@bt-libs/shared/util/form-validators';
import { ExpenseModel } from '@bt-libs/finance/data-access/expenses';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'bt-libs-ui-add-expense-template-driven-form',
  imports: [CommonModule, FormsModule, MaxWordCountDirective],
  templateUrl: './add-expense-td-form.component.html',
  styleUrl: './add-expense-td-form.component.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class AddExpenseTemplateDrivenFormComponent {
  @ViewChild('addExpenseForm') form!: NgForm;
  @Input() expenseToAdd: ExpenseModel = {
    id: uuidv4(),
    description: '',
    amount: {
      amountExclVat: 0,
      vatPercentage: 0
    },
    date: '',
  };

  @Output() addExpense = new EventEmitter<ExpenseModel>();

  onSubmit() {
    this.addExpense.emit(structuredClone(this.expenseToAdd));
    this.form.reset();
  }
}
