import { Component, OnInit } from '@angular/core';
import { ExpensesService } from '../../../services/expenses.service';
import { Expense } from '../../../model/expense';

@Component({
  selector: 'app-expenses-category',
  templateUrl: './expenses-category.component.html',
  styleUrls: ['./expenses-category.component.css']
})
export class ExpensesCategoryComponent implements OnInit {

  categories: Expense[];
  cat: Expense;
  
  constructor(
    private expenseCat: ExpensesService
  ) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories(): void {  
    this.expenseCat.selectExpenses().subscribe(data => {
      this.categories = data;
    });
  }

  delete(cat: Expense): void {
    this.categories = this.categories.filter(p => p !== cat);
    this.expenseCat.deleteExpenseCat(cat).subscribe();
  }

}
