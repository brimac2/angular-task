import { Expense } from './../expense';
import { BudgetService } from '../budget.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css'],
})
export class ExpensesComponent implements OnInit {
  expenses: Expense[] = [];
  constructor(private budgetService: BudgetService) {}

  ngOnInit(): void {
    this.getExpenses();
  }

  getExpenses(): void {
    this.budgetService
      .getExpenses()
      .subscribe((expenses) => (this.expenses = expenses));
  }
}
