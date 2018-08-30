import { Component, OnInit } from '@angular/core';
import { SnotifyService } from 'ng-snotify';
import { Station } from '../../../model/station';
import { Employee } from '../../../model/employee';
import { EmployeesService } from '../../../services/employees.service';
import { NgForm } from '../../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-create-employees',
  templateUrl: './create-employees.component.html',
  styleUrls: ['./create-employees.component.css']
})
export class CreateEmployeesComponent implements OnInit {

  stations: Station[];
  station: Station;
  levels: Employee[];
  level: Employee;

  public form= {
    employee_level_id: null,
    station_id: null,
    level: null,
    firstName: null,
    secondName: null,
    lastName: null,
    salary: null,
    phone: null,
    address: null,
    date_of_birth: null,
    date_hired: null,
    station: null
  };

  selectedStation: Station;
  selectedLevel: Employee;

  constructor(
    private emp: EmployeesService,
    private notify: SnotifyService
  ) { }

  ngOnInit() {
    this.getEmployeeLevel();
    this.getStation()
  }

  getEmployeeLevel() {  
    this.emp.selectEmployeeLevels().subscribe(data => {
      this.levels = data;
    });
  }

  getStation() {  
    this.emp.getStations().subscribe(data => {
      this.stations = data;
    });
  }
  
  saveEmployee(newEmployeeForm: NgForm) {
    this.emp.addEmployee(this.form).subscribe(
      data => {
        this.handleResponse(data)
      },
      error => {
        this.handleError(error)
      } 
    )
    newEmployeeForm.resetForm();
  }

  handleResponse(res) {
    this.notify.success(res.data, {timeout:0});
    
  }

  handleError(error) {
    this.notify.error(error.error.error);
  }

  stationChange(e) {
    this.stations.filter(element => {
      if(element.id == e.target.value) {
        this.station = element
      }
    })
    this.selectedStation = this.station;
    this.form.station_id = this.selectedStation.id;
    this.form.station = this.selectedStation.name;
  }

  levelChange(e) {
    this.levels.filter(element => {
      if(element.id == e.target.value) {
        this.level = element
      }
    })
    this.selectedLevel = this.level;
    this.form.level = this.selectedLevel.name;
    this.form.employee_level_id = this.selectedLevel.id;
  }
}
