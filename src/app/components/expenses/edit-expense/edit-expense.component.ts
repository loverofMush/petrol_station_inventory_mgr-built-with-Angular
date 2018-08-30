import { Component, OnInit, Input } from '@angular/core';
import { Expense } from '../../../model/expense';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { ExpensesService } from '../../../services/expenses.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-expense',
  templateUrl: './edit-expense.component.html',
  styleUrls: ['./edit-expense.component.css']
})
export class EditExpenseComponent implements OnInit {

  @Input() expense: Expense;

  constructor(
    private route: ActivatedRoute,
    private expenseService: ExpensesService,
    private location: Location
  ) { }

  public form= {
    expense_type: null,
    amount: null,
    description: null,
    expense_date: null
  };

  ngOnInit() {
    this.getExpense();
  }

  getExpense(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.expenseService.editExpense(id)
    .subscribe(expense => {
      this.expense = expense;
      this.form = expense;
    });
  }

  goBack(): void {
    this.location.back();
  }

  updateExpense(): void {
    this.expenseService.updateExpense(this.expense)
      .subscribe(() => this.goBack());
  }

}
