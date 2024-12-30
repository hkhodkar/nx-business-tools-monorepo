import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  DisplayScalesComponent,
  DisplayScalesDirective,
  ModalComponent,
} from '@bt-libs/shared/ui/common-component';
import {
  AddExpense,
  AddExpenseTemplateDrivenFormComponent,
} from '@bt-libs/finance/ui/expenses-registration-forms';

@Component({
  selector: 'business-tools-monorepo-expenses-overview-page',
  imports: [
    CommonModule,
    RouterModule,
    ModalComponent,
    AddExpenseTemplateDrivenFormComponent,
    DisplayScalesComponent,
    DisplayScalesDirective,
  ],
  templateUrl: './expenses-overview-page.component.html',
  styleUrl: './expenses-overview-page.component.sass',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpensesOverviewPageComponent {
  addExpense(formData: AddExpense) {
    console.log(formData);
  }
  addExpenseShown = false;
}
