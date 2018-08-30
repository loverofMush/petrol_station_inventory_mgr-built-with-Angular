import { Component, OnInit } from '@angular/core';
import { Station } from '../../../model/station';
import { StocksService } from '../../../services/stocks.service';
import { Stock } from '../../../model/stock';

@Component({
  selector: 'app-dry-product-stock',
  templateUrl: './dry-product-stock.component.html',
  styleUrls: ['./dry-product-stock.component.css']
})
export class DryProductStockComponent implements OnInit {

  stocks: Stock[];
  stock: Stock[];
  stations: Station[];
  station: Station;
  query: any;
  selectedStation: any;

  constructor(
    private stockService: StocksService
  ) { }

  ngOnInit() {
    this.getDryStationStock();
  }

  getDryStationStock() {
    this.stockService.getDryStocksByStation().subscribe(data => {
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

  deleteDryStock(stock: Stock): void {
    this.stocks = this.stocks.filter(s => s !== stock);
    this.stockService.deleteDryStock(stock).subscribe();
  }
}
