import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ExpenseModel } from '@bt-libs/finance/data-access/expenses';
import { ModalComponent } from '@bt-libs/shared/ui/common-component';
import { AddExpenseReactiveFormComponent } from '@bt-libs/finance/ui/expenses-registration-forms';
import { ButtonComponent } from '@bt-libs/shared/ui/common-component';

@Component({
  selector: 'business-tools-monorepo-expenses-overview-page',
  imports: [CommonModule, RouterModule, ModalComponent, AddExpenseReactiveFormComponent, ButtonComponent],
  templateUrl: './expenses-overview-page.component.html',
  styleUrl: './expenses-overview-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpensesOverviewPageComponent {
  showAddExpanseModal = signal(false);
  totalInclVat = computed(() => this.expenses().reduce((total, { amount: {
    amountExclVat, vatPercentage } }) => amountExclVat / 100 * (100 + vatPercentage) +
    total, 0));
  expenses = signal<ExpenseModel[]>([{
    amount:
      { amountExclVat: 10, vatPercentage: 10 },
    date:
      "2025-01-05",
    description: "desc1",
    id: "d44c1f23-8dc0-43fa-8887-4c369b1b0789",
    tags: ['tagB', 'tagA']
  },
  {
    amount:
      { amountExclVat: 10, vatPercentage: 10 },
    date:
      "2025-01-22",
    description: "desc2",
    id: "d44c1f23-8dc0-43fa-8887-4c369b1b0789",
    tags: ['tagE', 'tagD']
  }
]);

  onAddExpense(expense: ExpenseModel) {
    console.log(expense)
    this.expenses.update(data => [expense, ...data]);
    this.showAddExpanseModal.set(false);
  }
}
