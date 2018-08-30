import { Component, OnInit } from '@angular/core';
import { Product } from '../../../model/product';
import { ProductService } from '../../../services/product.service';
import { StocksService } from '../../../services/stocks.service';
import { Stock } from '../../../model/stock';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-create-dry-stock',
  templateUrl: './create-dry-stock.component.html',
  styleUrls: ['./create-dry-stock.component.css']
})
export class CreateDryStockComponent implements OnInit {

  product: Product;
  products: Product[];
  stocks: Stock[];
  selectedProduct: Product;

  public form= {
    dry_product_id: null,
    dry_product_sub_id: null,
    product: null,
    opening_inventory: null,
    closing_inventory: null,
    stock_sold: null,
    stock_received: null,
    stock_date: null
  };

  constructor(
    private productService: ProductService,
    private stocksService: StocksService,
    private notify: SnotifyService
  ) { }

  ngOnInit() {
    this.getDryProducts();
  }

  getDryProducts() {  
    this.productService.fetchSubProducts().subscribe(data => {
      this.products = data;
    });
  }

  getDryStocks() {
    const id = this.form.dry_product_id;
    this.stocksService.getDryStocksByDate(id)
      .subscribe(stocks => {
      this.stocks = stocks;
    });
  }
  
  saveDryStock() {
    this.stocksService.addDryStock(this.form).subscribe(
      data => {
        this.handleResponse(data)
      },
      error => {
        this.handleError(error)
      } 
    )
    this.getDryStocks();
  }

  handleResponse(res) {
    this.notify.success(res.data, {timeout:0});
    this.form.product = null;
    this.form.opening_inventory = null;
    this.form.closing_inventory = null;
    this.form.stock_received = null;
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
    this.form.product = this.selectedProduct.name;
    this.form.dry_product_id = this.selectedProduct.dry_product_id;
  }

  stock_sold(e) {
    this.form.stock_sold = this.form.opening_inventory - (this.form.closing_inventory - this.form.stock_received)
  }
}
