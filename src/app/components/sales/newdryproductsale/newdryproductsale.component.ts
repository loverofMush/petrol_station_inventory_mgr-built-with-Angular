import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../model/product';

@Component({
  selector: 'app-newdryproductsale',
  templateUrl: './newdryproductsale.component.html',
  styleUrls: ['./newdryproductsale.component.css']
})
export class NewdryproductsaleComponent implements OnInit {

  products: Product[];
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.getProducts()
  }

  getProducts(): void {  
    this.productService.getDryProducts().subscribe(data => {
      this.products = data;
    });
  }

}
