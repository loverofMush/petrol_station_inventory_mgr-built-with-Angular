import { Component, OnInit } from '@angular/core';
import { Station } from '../../../model/station';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  stations: Station[]
  constructor(
    private user: UserService
  ) { }

  ngOnInit() {
    this.getUsersByStation()
  }

  getUsersByStation() {  
    this.user.getUsers().subscribe(data => {
      this.stations = data;
      console.log(data);
    });
  }
}
