import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from '@bt-libs/shared/ui/common-directives';
import { SelectableLabelComponent } from '@bt-libs/shared/ui/common-component';
import {
  AddExpenseTemplateDrivenFormComponent,
  DynamicControl,
  DynamicFormComponent,
} from '@bt-libs/finance/ui/expenses-registration-forms';
import { Validators } from '@angular/forms';
import { ExpenseModel } from '@bt-libs/finance/data-access/expenses';

@Component({
  selector: 'business-tools-monorepo-expenses-approval-page',
  imports: [
    CommonModule,
    HighlightDirective,
    SelectableLabelComponent,
    AddExpenseTemplateDrivenFormComponent,
    DynamicFormComponent,
  ],
  templateUrl: './expenses-approval-page.component.html',
  styleUrl: './expenses-approval-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpensesApprovalPageComponent {

  formModelConfig: DynamicControl[] = [
    {
      controlKey: 'description',
      formFieldType: 'input',
      inputType: 'text',
      label: 'Description',
      defaultValue: '',
      updateOn: 'change',
      validators: [Validators.required],
    },
    {
      controlKey: 'amount',
      formFieldType: 'input',
      inputType: 'number',
      label: 'Amount excl. VAT',
      defaultValue: null,
      updateOn: 'change',
      validators: [Validators.required, Validators.min(0)],
    },
    {
      controlKey: 'Vat percentage',
      formFieldType: 'input',
      inputType: 'number',
      label: 'Amount of VAT percentage',
      defaultValue: null,
      updateOn: 'change',
      validators: [Validators.required, Validators.min(0), Validators.max(100)],
    },
  ];

  onAddExpense(addExpense: ExpenseModel) {
    console.log(addExpense);
  }
}
