import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Product } from '../../../model/product';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-newwetproductsale',
  templateUrl: './newwetproductsale.component.html',
  styleUrls: ['./newwetproductsale.component.css']
})
export class NewwetproductsaleComponent implements OnInit{

  products: Product[]
  
  constructor(
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.getProducts()
  }

  getProducts(): void {  
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }
}
