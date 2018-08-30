import { Component, OnInit } from '@angular/core';
import { ExpensesService } from '../../../services/expenses.service';
import { SnotifyService } from 'ng-snotify';
import { Expense } from '../../../model/expense';

@Component({
  selector: 'app-create-expenses',
  templateUrl: './create-expenses.component.html',
  styleUrls: ['./create-expenses.component.css']
})
export class CreateExpensesComponent implements OnInit {

  categories: Expense[];
  expenses: Expense[];
  cat: Expense;

  public form= {
    expense_category_id: null,
    expense_type: null,
    amount: null,
    description: null,
    expense_date: null
  };
  selectedCategory: Expense;

  constructor(
    private expenseCat: ExpensesService,
    private notify: SnotifyService
  ) { }

  ngOnInit() {
    this.getExpensesCat();
  }

  getExpensesCat() {  
    this.expenseCat.selectExpenses().subscribe(data => {
      this.categories = data;
    });
  }

  getAllExpenses() {
    this.expenseCat.getExpensesByCategoryId()
      .subscribe(expenses => {
      this.expenses = expenses;
    });
  }
  
  saveExpense() {
    this.expenseCat.addExpense(this.form).subscribe(
      data => {
        this.handleResponse(data)
      },
      error => {
        this.handleError(error)
      } 
    )
    this.getAllExpenses();
  }

  handleResponse(res) {
    this.notify.success(res.data, {timeout:0});
    this.form.amount = null;
  }

  handleError(error) {
    this.notify.error(error.error.error);
  }

  categoryChange(e) {
    this.categories.filter(element => {
      if(element.id == e.target.value) {
        this.cat = element
      }
    })
    this.selectedCategory = this.cat;
    this.form.expense_type = this.selectedCategory.name;
    this.form.expense_category_id = this.selectedCategory.id;
  }
}
