import { Injectable } from '@angular/core';
import { ExpenseDto, ExpenseModel } from '../models/expenses.interfaces';
import { ExpensesModelAdapter } from '../adapters/expense.adapter';
import { GenericHttpService } from '@bt-libs/shared/data-access/generic-http';

@Injectable({ providedIn: 'root' })
export class ExpensesHttpService extends GenericHttpService<
  ExpenseDto,
  ExpenseModel
> {
  constructor() {
    super('/expenses', '', new ExpensesModelAdapter());
  }
}
