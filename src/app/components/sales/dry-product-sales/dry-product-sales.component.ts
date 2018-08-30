import { Component, OnInit } from '@angular/core';
import { Station } from '../../../model/station';
import { SalesService } from '../../../services/sales.service';

@Component({
  selector: 'app-dry-product-sales',
  templateUrl: './dry-product-sales.component.html',
  styleUrls: ['./dry-product-sales.component.css']
})
export class DryProductSalesComponent implements OnInit {

  stations: Station[];
  station: Station;
  query: any;

  selectedStation: any;

  constructor(
    private salesService: SalesService
  ) { }

  ngOnInit() {
    this.getDryStationSales();
  }

  getDryStationSales() {
    this.salesService.getTotalDrySalesByStation().subscribe(data => {
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
