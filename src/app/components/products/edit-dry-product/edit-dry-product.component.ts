import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../model/product';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { ProductService } from '../../../services/product.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-dry-product',
  templateUrl: './edit-dry-product.component.html',
  styleUrls: ['./edit-dry-product.component.css']
})
export class EditDryProductComponent implements OnInit {

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
    this.productService.editDryProduct(id)
    .subscribe(product => {
      this.product = product;
      this.form = product;
    });
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.productService.updateDryProduct(this.product)
      .subscribe(() => this.goBack());
  }
}
