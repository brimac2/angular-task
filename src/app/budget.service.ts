import { ExpensesComponent } from './expenses/expenses.component';
import { Expense } from './expense';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  EXPENSES: Expense[] = [
    {
      id: '1',
      name: 'pizza',
      amount: '7',
      description: 'Margarita from Express pizza',
    },
    {
      id: '2',
      name: 'coffe',
      amount: '2.5',
      description: 'Americano from Vero caffe',
    },
  ];
  messageService: any;

  constructor() {}

  getExpenses(): Observable<Expense[]> {
    const expenses = of(this.EXPENSES);
    return expenses;
  }

  getExpense(id: string): Observable<Expense> {
    const expense = this.EXPENSES.find((e) => e.id === id)!;
    return of(expense);
  }
}
