import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Supplier } from '../../../model/supplier';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { DealerService } from '../../../services/dealer.service';

@Component({
  selector: 'app-edit-supplier',
  templateUrl: './edit-supplier.component.html',
  styleUrls: ['./edit-supplier.component.css']
})
export class EditSupplierComponent implements OnInit {

  @Input() dealer: Supplier;

  constructor(
    private route: ActivatedRoute,
    private dealerService: DealerService,
    private location: Location
  ) { }

  public form= {
    name: null,
    code: null
  };

  ngOnInit() {
    this.getSupplier();
  }

  getSupplier(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.dealerService.editSupplier(id)
    .subscribe(dealer => {
      this.dealer = dealer;
      this.form = dealer;
    });
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.dealerService.updateSupplier(this.dealer)
      .subscribe(() => this.goBack());
  }
}
