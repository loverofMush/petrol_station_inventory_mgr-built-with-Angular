import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { SalesService } from '../../../services/sales.service';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { DecimalPipe, CurrencyPipe } from '../../../../../node_modules/@angular/common';
import { Product } from '../../../model/product';
import { DrySale } from '../../../model/sale';
import { NgForm } from '../../../../../node_modules/@angular/forms';
import { SnotifyService } from 'ng-snotify';
import { EmployeesService } from '../../../services/employees.service';
import { Employee } from '../../../model/employee';
import { User } from '../../../model/user';

@Component({
  selector: 'app-daily-dry-sale',
  templateUrl: './daily-dry-sale.component.html',
  styleUrls: ['./daily-dry-sale.component.css'],
  providers: [DecimalPipe, CurrencyPipe]
})
export class DailyDrySaleComponent implements OnInit {

  @Input()product: Product;

  products: Product[];
  sales: DrySale[];
  sale: DrySale;
  employees: Employee[];
  user: User;
  selectedProduct: Product;

  public form= {
    dry_product_id: null,
    dry_product_sub_id: null,
    selling_price: null,
    sales_attendant: null,
    dry_code: null,
    quantity_sold: null,
    cash_amt: null,
    date_sold: null,
    dry_product: null,
    station_id: null
  };

  constructor(
    private productService: ProductService,
    private salesService: SalesService,
    private route: ActivatedRoute,
    private currencyPipe: CurrencyPipe,
    private notify: SnotifyService,
    private emp: EmployeesService
  ) { }

  ngOnInit() {
    this.getProduct();
    this.getSales();
    this.getUser();
  }

  getUser() {
    this.salesService.getUserByStation()
      .subscribe(user => {
      this.user = user; 

      const id = +this.user[0].station_id;
      this.emp.getStationEmployees(id)
        .subscribe(employees => {
        this.employees = employees
      })
    })
  }

  getProduct() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getSubProducts(id)
      .subscribe(products => {
      this.products = products;
    })
    this.form.dry_product_id = id;
  }

  productChange(e) {
    this.products.filter(element => {
      if(element.id == e.target.value) {
        this.product = element
      }
    })
    this.selectedProduct = this.product;
    this.form.dry_code = this.selectedProduct.name;
    this.form.selling_price = this.selectedProduct.price;
  }

  getSales() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.salesService.getDrySalesByDate(id)
      .subscribe(sales => {
      this.sales = sales;
    });
  }

  saveSale(drySalesForm: NgForm) {
    this.salesService.addDrySale(this.form).subscribe(
      data => {
       this.handleResponse(data)
      },
      error => {
        this.handleError(error)
      }
    )
    this.getSales();
    this.totalSales();
  }

  handleResponse(res) {
    this.notify.success(res.data, {timeout:0});
    this.form.dry_code = null;
    this.form.quantity_sold = null;
    this.form.cash_amt = null;
  }

  handleError(error) {
    this.notify.error(error.error.error);
  }

  litres_sold(e) {
    this.form.cash_amt = +this.form.quantity_sold * +this.form.selling_price
  }

  totalSales() {
    let total = 0;
    this.sales.forEach((sale) => {
      total = +total + +sale.cash_amt;
    });
    return total;
  }

  getCurrency(total: number, NGR: any) {
    return this.currencyPipe.transform(total, '₦', NGR ,'1.2-2');
  }
}
