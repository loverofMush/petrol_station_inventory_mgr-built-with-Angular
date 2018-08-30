import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { Location } from '@angular/common';
import { SalesService } from '../../../services/sales.service';
import { DrySale } from '../../../model/sale';

@Component({
  selector: 'app-edit-dry-sale',
  templateUrl: './edit-dry-sale.component.html',
  styleUrls: ['./edit-dry-sale.component.css']
})
export class EditDrySaleComponent implements OnInit {

  @Input() sale: DrySale;

  constructor(
    private route: ActivatedRoute,
    private salesService: SalesService,
    private location: Location
  ) { }

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

  ngOnInit() {
    this.getSale();
  }

  getSale(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.salesService.EditDrySale(id)
    .subscribe(sale => {
      this.sale = sale;
      this.form = sale;
    });
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.salesService.updateDrySale(this.sale)
      .subscribe(() => this.goBack());
  }

  litres_sold(e) {
    this.form.cash_amt = +this.form.quantity_sold * +this.form.selling_price
  }
}
