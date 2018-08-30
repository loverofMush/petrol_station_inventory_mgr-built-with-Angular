import { Component, OnInit } from '@angular/core';
import { DealerService } from '../../../services/dealer.service';
import { Supplier } from '../../../model/supplier';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  dealers: Supplier[];
  
  constructor(
    private dealerService: DealerService
  ) { }

  ngOnInit() {
    this.getSuppliers();
  }

  getSuppliers(): void {  
    this.dealerService.getSuppliers().subscribe(data => {
      this.dealers = data;
    });
  }

  delete(dealer: Supplier): void {
    this.dealers = this.dealers.filter(p => p !== dealer);
    this.dealerService.deleteSupplier(dealer).subscribe();
  }
}
