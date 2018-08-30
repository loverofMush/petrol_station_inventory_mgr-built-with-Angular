import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Router } from '../../../../../node_modules/@angular/router';
import { SnotifyService } from '../../../../../node_modules/ng-snotify';
import { Station } from '../../../model/station';
import { Role } from '../../../model/role';
import { NgForm } from '../../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  public form= {
    email: null,
    name: null,
    role_id: null,
    station_id: null,
    station_name: null
  };

  public error = {
    email: null,
    name: null,
    role_id: null,
    station_id: null
  };

  stations: Station[];
  station: Station;
  roles: Role[];
  selectedStation: Station;

  constructor(
    private user: UserService,
    private router: Router,
    private notify: SnotifyService
  ) { }

  ngOnInit() {
    this.getRoles();
    this.getStations();
  }

  onSubmit(createUserForm: NgForm) {
    this.notify.info('Wait...', {timeout:5000})
    this.user.addUser(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    )
    createUserForm.resetForm();
  }

  handleResponse(res) {
    this.notify.success(res.data, {timeout:0});
  }

  handleError(error) {
    this.notify.error(error.error.error);
  }

  getRoles() {  
    this.user.getRoles().subscribe(data => {
      this.roles = data;
      console.log(data)
    });
  }

  getStations() {  
    this.user.getStations().subscribe(data => {
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
    this.form.station_name = this.selectedStation.name;
  }
}
