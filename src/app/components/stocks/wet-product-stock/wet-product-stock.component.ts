import { Component, OnInit } from '@angular/core';
import { StocksService } from '../../../services/stocks.service';
import { Station } from '../../../model/station';
import { Stock } from '../../../model/stock';

@Component({
  selector: 'app-wet-product-stock',
  templateUrl: './wet-product-stock.component.html',
  styleUrls: ['./wet-product-stock.component.css']
})
export class WetProductStockComponent implements OnInit {
  
  stocks: Stock[];
  stock: Stock;
  stations: Station[];
  station: Station;
  query: any;
  selectedStation: any;

  constructor(
    private stockService: StocksService
  ) { }

  ngOnInit() {
    this.getStationStock();
  }

  getStationStock() {
    this.stockService.getStocksByStation().subscribe(data => {
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

  deleteStock(stock: Stock): void {
    this.stocks = this.stocks.filter(s => s !== stock);
    this.stockService.deleteStock(stock).subscribe();
  }
}
