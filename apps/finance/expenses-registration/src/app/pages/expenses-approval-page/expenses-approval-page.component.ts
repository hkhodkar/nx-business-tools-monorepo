import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from '@bt-libs/shared/ui/common-directives';
import { SelectableLabelComponent } from '@bt-libs/shared/ui/common-component';
import {
  AddExpense,
  AddExpenseReactiveFormComponent,
  AddExpenseTemplateDrivenFormComponent,
} from '@bt-libs/finance/ui/expenses-registration-forms';

@Component({
  selector: 'business-tools-monorepo-expenses-approval-page',
  imports: [
    CommonModule,
    HighlightDirective,
    SelectableLabelComponent,
    AddExpenseTemplateDrivenFormComponent,
    AddExpenseReactiveFormComponent
  ],
  templateUrl: './expenses-approval-page.component.html',
  styleUrl: './expenses-approval-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpensesApprovalPageComponent {
  onAddExpense(addExpense: AddExpense) {
    console.log(addExpense);
  }
}
