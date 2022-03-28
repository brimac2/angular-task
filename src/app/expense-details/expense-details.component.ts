import { BudgetService } from './../budget.service';
import { Expense } from './../expense';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-expense-details',
  templateUrl: './expense-details.component.html',
  styleUrls: ['./expense-details.component.css'],
})
export class ExpenseDetailsComponent implements OnInit {
  expense?: Expense;

  constructor(
    private route: ActivatedRoute,
    private budgetService: BudgetService
  ) {}

  ngOnInit(): void {
    this.getExpense();
  }

  getExpense(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.budgetService
      .getExpense(id)
      .subscribe((expense) => (this.expense = expense));
  }
}
