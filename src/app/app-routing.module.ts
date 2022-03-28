import { ExpensesComponent } from './expenses/expenses.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExpenseDetailsComponent } from './expense-details/expense-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'expenses', component: ExpensesComponent },
  { path: 'expense/:id', component: ExpenseDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
