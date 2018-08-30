import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../model/product';

@Component({
  selector: 'app-dry-products',
  templateUrl: './dry-products.component.html',
  styleUrls: ['./dry-products.component.css']
})
export class DryProductsComponent implements OnInit {

  products: Product[];
  
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {  
    this.productService.fetchSubProducts().subscribe(data => {
      this.products = data;
    });
  }

  deleteDry(product: Product): void {
    this.products = this.products.filter(dp => dp !== product);
    this.productService.deleteDryProduct(product).subscribe();
  }
}
