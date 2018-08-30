import { Component, OnInit, Input } from '@angular/core';
import { Supply } from '../../../model/supply';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { SuppliesService } from '../../../services/supplies.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-wet-purchase',
  templateUrl: './edit-wet-purchase.component.html',
  styleUrls: ['./edit-wet-purchase.component.css']
})
export class EditWetPurchaseComponent implements OnInit {

  @Input() supply: Supply;

  constructor(
    private route: ActivatedRoute,
    private supsService: SuppliesService,
    private location: Location
  ) { }

  public form= {
    product: null,
    supplier_code: null,
    inventory_received: null,
    transport_cost: null,
    purchase_price: null,
    purchase_date: null
  };

  ngOnInit() {
    this.getPurchase();
  }

  getPurchase(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.supsService.editPurchase(id)
    .subscribe(supply => {
      this.supply = supply;
      this.form = supply;
    });
  }

  goBack(): void {
    this.location.back();
  }

  updatePurchase(): void {
    this.supsService.updatePurchase(this.supply)
      .subscribe(() => this.goBack());
  }
}
