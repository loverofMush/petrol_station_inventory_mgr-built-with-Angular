import { Component, OnInit } from '@angular/core';
import { Station } from '../../../model/station';
import { SuppliesService } from '../../../services/supplies.service';
import { Supply } from '../../../model/supply';

@Component({
  selector: 'app-wet-product-purchase',
  templateUrl: './wet-product-purchase.component.html',
  styleUrls: ['./wet-product-purchase.component.css']
})
export class WetProductPurchaseComponent implements OnInit {

  supplies: Supply[];
  supply: Supply;
  stations: Station[];
  station: Station;
  query: any;
  selectedStation: any;

  constructor(
    private supsService: SuppliesService
  ) { }

  ngOnInit() {
    this.getStationPurchase();
  }

  getStationPurchase() {
    this.supsService.getPurchasesByStation().subscribe(data => {
      this.stations = data;
    });
  }

  stationChange(e) {
    this.stations.filter(element => {
      if(element.id == e.target.value) {
        this.station = element
      }
    })
    this.selectedStation = this.station;
  }

  deletePurchase(supply: Supply): void {
    this.supplies = this.supplies.filter(s => s !== supply);
    this.supsService.deletePurchase(supply).subscribe();
  }
}
