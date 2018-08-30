import { Component, OnInit } from '@angular/core';
import { Station } from '../../../model/station';
import { SuppliesService } from '../../../services/supplies.service';
import { Supply } from '../../../model/supply';

@Component({
  selector: 'app-dry-product-supply',
  templateUrl: './dry-product-supply.component.html',
  styleUrls: ['./dry-product-supply.component.css']
})
export class DryProductSupplyComponent implements OnInit {

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
    this.getDryStationStock();
  }

  getDryStationStock() {
    this.supsService.getDrySuppliesByStation().subscribe(data => {
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

  
  deleteSupply(supply: Supply): void {
    this.supplies = this.supplies.filter(s => s !== supply);
    this.supsService.deleteDrySupply(supply).subscribe();
  }
}
