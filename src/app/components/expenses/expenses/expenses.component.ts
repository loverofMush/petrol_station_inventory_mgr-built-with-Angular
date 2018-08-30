import { Component, OnInit } from '@angular/core';
import { Station } from '../../../model/station';
import { ExpensesService } from '../../../services/expenses.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {

  stations: Station[];
  station: Station;
  query: any;

  selectedStation: any;
  
  constructor(
    private expense: ExpensesService
  ) { }

  ngOnInit() {
    this.getExpenses()
  }

  getExpenses() {
    this.expense.getStationExpenses().subscribe(data => {
      this.stations = data;
      console.log(data)
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
