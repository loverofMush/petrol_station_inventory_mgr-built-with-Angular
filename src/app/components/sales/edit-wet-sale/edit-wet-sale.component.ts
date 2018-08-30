import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { Location } from '@angular/common';
import { Sale } from '../../../model/sale';
import { SalesService } from '../../../services/sales.service';

@Component({
  selector: 'app-edit-wet-sale',
  templateUrl: './edit-wet-sale.component.html',
  styleUrls: ['./edit-wet-sale.component.css']
})
export class EditWetSaleComponent implements OnInit {

  @Input() sale: Sale;

  constructor(
    private route: ActivatedRoute,
    private salesService: SalesService,
    private location: Location
  ) { }

  public form= {
    wet_product_id: null,
    selling_price: null,
    sales_attendant: null,
    pump_code: null,
    opening_metre: null,
    closing_metre: null,
    litres_sold: null,
    cash_amt: null,
    date_sold: null
  };

  ngOnInit() {
    this.getSale();
  }

  getSale(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.salesService.EditSale(id)
    .subscribe(sale => {
      this.sale = sale;
      this.form = sale;
    });
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.salesService.updateSale(this.sale)
      .subscribe(() => this.goBack());
  }

  litres_sold(e) {
    this.form.litres_sold = this.form.closing_metre - this.form.opening_metre
    this.form.cash_amt = +this.form.litres_sold * +this.form.selling_price
  }
}
