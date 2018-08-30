import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { SuppliesService } from '../../../services/supplies.service';
import { Location } from '@angular/common';
import { Supply } from '../../../model/supply';

@Component({
  selector: 'app-edit-dry-supply',
  templateUrl: './edit-dry-supply.component.html',
  styleUrls: ['./edit-dry-supply.component.css']
})
export class EditDrySupplyComponent implements OnInit {

  @Input() supply: Supply;

  constructor(
    private route: ActivatedRoute,
    private supsService: SuppliesService,
    private location: Location
  ) { }

  public form= {
    product: null,
    inventory_received: null,
    supply_price: null,
    supply_date: null
  };

  ngOnInit() {
    this.getDryStock();
  }

  getDryStock(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.supsService.editDrySupply(id)
    .subscribe(supply => {
      this.supply = supply;
      this.form = supply;
    });
  }

  goBack(): void {
    this.location.back();
  }

  updateDrySupply(): void {
    this.supsService.updateDrySupply(this.supply)
      .subscribe(() => this.goBack());
  }
}
