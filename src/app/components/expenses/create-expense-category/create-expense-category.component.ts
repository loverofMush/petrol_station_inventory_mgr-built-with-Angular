import { Component, OnInit } from '@angular/core';
import { ExpensesService } from '../../../services/expenses.service';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-create-expense-category',
  templateUrl: './create-expense-category.component.html',
  styleUrls: ['./create-expense-category.component.css']
})
export class CreateExpenseCategoryComponent implements OnInit {

  public form= {
    name: null
  };

  constructor(
    private expenseCat: ExpensesService,
    private notify: SnotifyService
  ) { }

  ngOnInit() {
  }

  saveExpenseCat() {
    this.expenseCat.addExpenseCat(this.form).subscribe(
      data => {
        this.handleResponse(data)
      },
      error => {
        this.handleError(error)
      }
    )
  }

  handleResponse(res) {
    this.notify.success(res.data, {timeout:0});
    this.form.name = null;
  }

  handleError(error) {
    this.notify.error(error.error.error);
  }

}
