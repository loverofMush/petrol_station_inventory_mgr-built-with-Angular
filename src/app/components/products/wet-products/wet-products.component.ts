import { Component, OnInit } from '@angular/core';
import { Product } from '../../../model/product';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-wet-products',
  templateUrl: './wet-products.component.html',
  styleUrls: ['./wet-products.component.css']
})
export class WetProductsComponent implements OnInit {

  products: Product[];
  
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {  
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  delete(product: Product): void {
    this.products = this.products.filter(p => p !== product);
    this.productService.deleteProduct(product).subscribe();
  }
}
