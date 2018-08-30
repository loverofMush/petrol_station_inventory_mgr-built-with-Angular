import { Component, OnInit, Input } from '@angular/core';
import { Expense } from '../../../model/expense';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { ExpensesService } from '../../../services/expenses.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-expense-category',
  templateUrl: './edit-expense-category.component.html',
  styleUrls: ['./edit-expense-category.component.css']
})
export class EditExpenseCategoryComponent implements OnInit {

  @Input() cat: Expense;

  constructor(
    private route: ActivatedRoute,
    private expenseCat: ExpensesService,
    private location: Location
  ) { }

  public form= {
    name: null
  };

  ngOnInit() {
    this.getCategory();
  }

  getCategory(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.expenseCat.editExpenseCat(id)
    .subscribe(cat => {
      this.cat = cat;
      this.form = cat;
    });
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.expenseCat.updateExpenseCat(this.cat)
      .subscribe(() => this.goBack());
  }
}
