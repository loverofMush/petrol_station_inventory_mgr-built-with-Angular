import { Component, OnInit, } from '@angular/core';
import { Station } from '../../../model/station';
import { ChartsService } from '../../../services/charts.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  stations: Station[]
  dryStations: Station[];
  stationExpenses: Station[];
  stationSales: Station[];
  stationSale: Station;
  chart: any;
  myChart: any;

  constructor(
    private chartService: ChartsService
  ) { }

  ngOnInit() {
    this.getDrySalesByCurrentMonth()
    this.getWetSalesByCurrentMonth()
    this.getExpensesByCurrentMonth()
    this.getCharts()
    this.getExpensesCharts()
  }

  getWetSalesByCurrentMonth() {
    this.chartService.getSalesByCurrentMonth().subscribe(stations => {
      this.stations = stations
    })
  }

  getDrySalesByCurrentMonth() {
    this.chartService.getDrySalesByCurrentMonth().subscribe(data => {
      this.dryStations = data
    })
  }
  
  getExpensesByCurrentMonth() {
    this.chartService.getExpensesByCurrentMonth().subscribe(data => {
      this.stationExpenses = data
    })
  }

  getCharts() {
    this.chartService.getAllWetSalesByMonth()
    .subscribe(res => {
    
      for (var i=0; i<res['main'].length; i++) {
        console.log()

        let total_sales = res['main'][0]['data'].map(res => res.total_sale)
        let station_name = res['main'][0].name

        let total_sales1 = res['main'][1]['data'].map(res => res.total_sale)
        let station_name1 = res['main'][1].name
        let allMonths1 = res['main'][1]['data'].map(res => res.month)

        var ctx = <HTMLCanvasElement>document.getElementById("canvas");
        this.chart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: allMonths1,
            datasets: [
              {
                label: station_name,
                data: total_sales,
                backgroundColor: '#3cba9f',
                fill: false
              },
              {
                label: station_name1,
                data: total_sales1,
                backgroundColor: 'red',
                fill: false
              }
            ]
          },
          options: {
            legend: {
              display: true
            },
            scales: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true
              }]
            }
          }
        })
      }
    })
  }

  getExpensesCharts() {
    this.chartService.getExpensesByMonth()
    .subscribe(res => {
    
      for (var i=0; i<res['main'].length; i++) {

        let amount = res['main'][0]['data'].map(res => res.amount)
        let station_name = res['main'][0].name
        let allMonths = res['main'][1]['data'].map(res => res.month)

        let amount1 = res['main'][1]['data'].map(res => res.amount)
        let station_name1 = res['main'][1].name

        var ctx = <HTMLCanvasElement>document.getElementById("myCanvas");
        this.myChart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: allMonths,
            datasets: [
              {
                label: station_name,
                data: amount,
                backgroundColor: '#3cba9f',
                fill: false
              },
              {
                label: station_name1,
                data: amount1,
                backgroundColor: 'red',
                fill: false
              }
            ]
          },
          options: {
            legend: {
              display: true
            },
            scales: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true
              }]
            }
          }
        })
      }
    })
  }
}
