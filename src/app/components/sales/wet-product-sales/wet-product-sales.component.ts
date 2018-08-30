import { Component, OnInit } from '@angular/core';
import { SalesService } from '../../../services/sales.service';
import { Station } from '../../../model/station';

@Component({
  selector: 'app-wet-product-sales',
  templateUrl: './wet-product-sales.component.html',
  styleUrls: ['./wet-product-sales.component.css']
})
export class WetProductSalesComponent implements OnInit {

  stations: Station[];
  station: Station;
  query: any;

  selectedStation: any;

  constructor(
    private salesService: SalesService
  ) { }

  ngOnInit() {
    this.getStationSales();
  }

  getStationSales() {
    this.salesService.getSalesByStation().subscribe(data => {
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
}
