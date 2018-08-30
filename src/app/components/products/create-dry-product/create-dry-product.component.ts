import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-create-dry-product',
  templateUrl: './create-dry-product.component.html',
  styleUrls: ['./create-dry-product.component.css']
})
export class CreateDryProductComponent implements OnInit {

  public form= {
    name: null,
    price: null,
    code: null
  };

  constructor(
    private productService: ProductService,
    private notify: SnotifyService
  ) { }

  ngOnInit() {
  }

  saveDryProduct() {
    this.productService.addDryProduct(this.form).subscribe(
      data => {
        this.handleResponse(data)
      },
      error => {
        this.handleError(error)
      }
    )
  }

  handleResponse(res) {
    this.notify.success(res.data, {timeout:0});
    this.form.name = null;
    this.form.price = null;
    this.form.code = null;
  }

  handleError(error) {
    this.notify.error(error.error.error);
  }
}
