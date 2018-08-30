import { Component, OnInit } from '@angular/core';
import { Product } from '../../../model/product';
import { ProductService } from '../../../services/product.service';
import { Supply } from '../../../model/supply';
import { SuppliesService } from '../../../services/supplies.service';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-create-dry-supply',
  templateUrl: './create-dry-supply.component.html',
  styleUrls: ['./create-dry-supply.component.css']
})

export class CreateDrySupplyComponent implements OnInit {

  product: Product;
  products: Product[];
  supplies: Supply[];
  selectedProduct: Product;

  public form= {
    dry_product_id: null,
    dry_product_sub_id: null,
    product: null,
    inventory_received: null,
    supply_price: null,
    supply_date: null
  };

  constructor(
    private productService: ProductService,
    private suppliesService: SuppliesService,
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

  getDrySupplies() {
    const id = this.form.dry_product_id;
    this.suppliesService.getDrySuppliesByDate(id)
      .subscribe(supplies => {
      this.supplies = supplies;
    });
  }
  
  saveDrySupply() {
    this.suppliesService.addDrySupply(this.form).subscribe(
      data => {
        this.handleResponse(data)
      },
      error => {
        this.handleError(error)
      }
    )
    this.getDrySupplies();
  }

  handleResponse(res) {
    this.notify.success(res.data, {timeout:0});
    this.form.product = null;
    this.form.inventory_received = null;
    this.form.supply_price = null;
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
}
