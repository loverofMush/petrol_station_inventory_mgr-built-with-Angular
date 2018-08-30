import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { ExpensesService } from '../../../services/expenses.service';
import { Expense } from '../../../model/expense';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit {

  
  @Input() expenses: Expense[];
  id: number;
  date: Date;

  constructor(
    private route: ActivatedRoute,
    private expenseService: ExpensesService
  ) { }

  ngOnInit() {
    this.getExpenseList()
  }

  getExpenseList() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.date = params['date'];
      this.expenseService.getExpensesByUser(this.id, this.date)
      .subscribe(expenses => {
      this.expenses = expenses;
      })
    });
  }

  deleteExpense(expense: Expense): void {
    this.expenses = this.expenses.filter(s => s !== expense);
    this.expenseService.deleteExpense(expense).subscribe();
  }
}
