import { Expense } from './expense';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  expenses: Expense[] = [
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

  constructor() {}

  getExpenses(): Expense[] {
    return this.expenses;
  }
}
