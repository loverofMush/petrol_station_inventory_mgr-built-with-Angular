import { Component, OnInit } from '@angular/core';
import { Product } from '../../../model/product';
import { Supply } from '../../../model/supply';
import { ProductService } from '../../../services/product.service';
import { SuppliesService } from '../../../services/supplies.service';
import { NgForm } from '../../../../../node_modules/@angular/forms';
import { Supplier } from '../../../model/supplier';
import { DealerService } from '../../../services/dealer.service';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-create-wet-purchase',
  templateUrl: './create-wet-purchase.component.html',
  styleUrls: ['./create-wet-purchase.component.css']
})
export class CreateWetPurchaseComponent implements OnInit {

  product: Product;
  products: Product[];
  sups: Supplier[];
  supplies: Supply[];
  selectedProduct: Product;

  public form= {
    wet_product_id: null,
    product: null,
    supplier_code: null,
    transport_cost: null,
    inventory_received: null,
    purchase_price: null,
    purchase_date: null
  };

  constructor(
    private productService: ProductService,
    private suppliesService: SuppliesService,
    private dealer: DealerService,
    private notify: SnotifyService
  ) { }

  ngOnInit() {
    this.getProducts();
  }

  getSuppliers() {  
    this.dealer.getSuppliers().subscribe(data => {
      this.sups = data;
    });
  }
  
  getProducts() {  
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  getPurchases() {
    this.suppliesService.getPurchasesByDate()
      .subscribe(supplies => {
      this.supplies = supplies;
    });
  }
  
  savePurchase(purchaseForm: NgForm) {
    this.suppliesService.addPurchase(this.form).subscribe(
      data => {
        this.handleResponse(data)
      },
      error => {
        this.handleError(error)
      }
    )
    setTimeout(() => {
      purchaseForm.resetForm();
      this.getPurchases();
    }, 5000)
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
}
