import { Component, OnInit } from '@angular/core';
import { Product } from '../../../model/product';
import { ProductService } from '../../../services/product.service';
import { StocksService } from '../../../services/stocks.service';
import { Stock } from '../../../model/stock';
import { NgForm } from '@angular/forms';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-create-wet-stock',
  templateUrl: './create-wet-stock.component.html',
  styleUrls: ['./create-wet-stock.component.css']
})
export class CreateWetStockComponent implements OnInit {

  product: Product;
  products: Product[];
  stocks: Stock[];
  selectedProduct: Product;

  public form= {
    wet_product_id: null,
    product: null,
    tank_code: null,
    opening_inventory: null,
    closing_inventory: null,
    stock_sold: null,
    stock_received: null,
    cash_amt: null,
    stock_date: null
  };

  constructor(
    private productService: ProductService,
    private stocksService: StocksService,
    private notify: SnotifyService
  ) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {  
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  getStocks() {
    this.stocksService.getStocksByDate()
      .subscribe(stocks => {
      this.stocks = stocks;
    });
  }
  
  saveStock(stocksForm: NgForm) {
    this.stocksService.addStock(this.form).subscribe(
      data => {
        this.handleResponse(data)
      },
      error => {
        this.handleError(error)
      }
    )
    stocksForm.resetForm();
    this.getStocks();
  }

  handleResponse(res) {
    this.notify.success(res.data, {timeout:0});
  }

  handleError(error) {
    this.notify.error(error.error.error);
  }

  productChange(e) {
    this.products.filter(element => {
      if(element.id == e.target.value) {
        this.product = element
      }
    })
    this.selectedProduct = this.product;
    this.form.product = this.product.code;
  }

  stock_sold(e) {
    this.form.stock_sold = this.form.opening_inventory - (this.form.closing_inventory - this.form.stock_received)
  }
}
