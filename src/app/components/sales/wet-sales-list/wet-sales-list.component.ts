import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { SalesService } from '../../../services/sales.service';
import { Sale } from '../../../model/sale';

@Component({
  selector: 'app-wet-sales-list',
  templateUrl: './wet-sales-list.component.html',
  styleUrls: ['./wet-sales-list.component.css']
})
export class WetSalesListComponent implements OnInit {

  @Input() sales: Sale[];
  sale: Sale;
  id: number;
  date: Date;
  product_id: number;

  constructor(
    private route: ActivatedRoute,
    private salesService: SalesService
  ) { }

  ngOnInit() {
    this.getSalesList()
  }

  getSalesList() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.product_id = +params['product_id'];
      this.date = params['date'];
      this.salesService.getSalesByUser(this.id, this.product_id, this.date)
      .subscribe(sales => {
      this.sales = sales;
      console.log(sales)
      })
    });
  }

  deleteSale(sale: Sale): void {
    this.sales = this.sales.filter(s => s !== sale);
    this.salesService.deleteSale(sale).subscribe();
  }

}
