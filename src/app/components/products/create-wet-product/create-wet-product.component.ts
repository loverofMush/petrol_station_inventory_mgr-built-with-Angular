import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-create-wet-product',
  templateUrl: './create-wet-product.component.html',
  styleUrls: ['./create-wet-product.component.css']
})
export class CreateWetProductComponent implements OnInit {

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

  saveProduct() {
    this.productService.addProduct(this.form).subscribe(
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
