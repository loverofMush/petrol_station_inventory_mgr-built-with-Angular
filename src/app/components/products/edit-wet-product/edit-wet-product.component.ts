import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../model/product';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-wet-product',
  templateUrl: './edit-wet-product.component.html',
  styleUrls: ['./edit-wet-product.component.css']
})
export class EditWetProductComponent implements OnInit {

  @Input() product: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location
  ) { }

  public form= {
    name: null,
    price: null,
    code: null
  };

  ngOnInit() {
    this.getProduct();
  }

  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.editProduct(id)
    .subscribe(product => {
      this.product = product;
      this.form = product;
    });
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.productService.updateProduct(this.product)
      .subscribe(() => this.goBack());
  }
}
