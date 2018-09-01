import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../model/product';
import { Router, ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { SalesService } from '../../../services/sales.service';
import { Sale } from '../../../model/sale';
import { ProductService } from '../../../services/product.service';
import { DecimalPipe, CurrencyPipe } from '@angular/common';
import { SnotifyService } from 'ng-snotify';
import { EmployeesService } from '../../../services/employees.service';
import { Employee } from '../../../model/employee';
import { User } from '../../../model/user';

@Component({
  selector: 'app-dailywetsale',
  templateUrl: './dailywetsale.component.html',
  styleUrls: ['./dailywetsale.component.css'],
  providers: [DecimalPipe, CurrencyPipe]
})
export class DailywetsaleComponent implements OnInit {

  @Input() product: Product;
  sales: Sale[];
  sale: Sale;
  employees: Employee[];
  user: User;

  public form= {
    wet_product_id: null,
    selling_price: null,
    sales_attendant: null,
    pump_code: null,
    opening_metre: null,
    closing_metre: null,
    litres_sold: null,
    cash_amt: null,
    date_sold: null,
    total_sales: null,
    wet_product: null
  };

  constructor(
    private productService: ProductService,
    private salesService: SalesService,
    private route: ActivatedRoute,
    private currencyPipe: CurrencyPipe,
    private notify: SnotifyService,
    private emp: EmployeesService
  ) {}

  ngOnInit(): void {
    this.getProduct()
    this.getSales()
    this.getUser()
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
    this.productService.editProduct(id)
      .subscribe(product => {
      this.product = product;
      this.form.wet_product_id = product.id,
      this.form.selling_price = product.price,
      this.form.wet_product = product.code
    })
  }

  getSales() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.salesService.getSalesByProductId(id)
      .subscribe(sales => {
      this.sales = sales;
    });
  }

  saveSale() {
    this.salesService.addSale(this.form).subscribe(
      data => {
        this.handleResponse(data)
      },
      error => {
        this.handleError(error)
      }
    )
    this.getSales();
    this.totalLitres();
    this.totalSales();
  }

  handleResponse(res) {
    this.notify.success(res.data, {timeout:0});
    this.form.pump_code = null,
    this.form.opening_metre = null,
    this.form.closing_metre = null,
    this.form.litres_sold =  null,
    this.form.cash_amt = null
  }

  handleError(error) {
    this.notify.error(error.error.error);
  }
  
  litres_sold(e) {
    this.form.litres_sold = this.form.closing_metre - this.form.opening_metre
    this.form.cash_amt = +this.form.litres_sold * +this.form.selling_price
  }

  totalLitres() {
    let total = 0;
    this.sales.forEach((sale) => {
      total = +total + +sale.litres_sold;
    });
    return total;
  }

  totalSales() {
    let total = 0;
    this.sales.forEach((sale) => {
      total = +total + +sale.cash_amt;
    });
    return total;
  }

  getCurrency(total: number) {
    return this.currencyPipe.transform(total , '1.2-2');
  }
}
