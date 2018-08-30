import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { SalesService } from '../../../services/sales.service';
import { DrySale } from '../../../model/sale';

@Component({
  selector: 'app-dry-sales-list',
  templateUrl: './dry-sales-list.component.html',
  styleUrls: ['./dry-sales-list.component.css']
})
export class DrySalesListComponent implements OnInit {

  @Input() sales: DrySale[];
  sale: DrySale;
  id: number;
  date: Date;

  constructor(
    private route: ActivatedRoute,
    private salesService: SalesService
  ) { }

  ngOnInit() {
    this.getDrySalesList()
  }

  getDrySalesList() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.date = params['date'];
      this.salesService.getDrySalesByUser(this.id, this.date)
      .subscribe(sales => {
      this.sales = sales;
      })
    });
  }

  deleteSale(sale: DrySale): void {
    this.sales = this.sales.filter(s => s !== sale);
    this.salesService.deleteDrySale(sale).subscribe();
  }
}
