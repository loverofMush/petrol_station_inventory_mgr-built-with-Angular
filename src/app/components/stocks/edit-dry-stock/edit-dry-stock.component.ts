import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { StocksService } from '../../../services/stocks.service';
import { Stock } from '../../../model/stock';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-dry-stock',
  templateUrl: './edit-dry-stock.component.html',
  styleUrls: ['./edit-dry-stock.component.css']
})
export class EditDryStockComponent implements OnInit {

  @Input() stock: Stock;

  constructor(
    private route: ActivatedRoute,
    private stocksService: StocksService,
    private location: Location
  ) { }

  public form= {
    product: null,
    opening_inventory: null,
    closing_inventory: null,
    stock_sold: null,
    stock_received: null,
    stock_date: null
  };

  ngOnInit() {
    this.getDryStock();
  }

  getDryStock(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.stocksService.editDryStock(id)
    .subscribe(stock => {
      this.stock = stock;
      this.form = stock;
    });
  }

  goBack(): void {
    this.location.back();
  }

  updateDryStock(): void {
    this.stocksService.updateDryStock(this.stock)
      .subscribe(() => this.goBack());
  }

  stock_sold(e) {
    this.form.stock_sold = this.form.opening_inventory - (this.form.closing_inventory - this.form.stock_received)
  }

}
