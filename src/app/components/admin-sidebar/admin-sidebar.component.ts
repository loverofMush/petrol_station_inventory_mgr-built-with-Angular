import { Component, OnInit, ElementRef } from '@angular/core';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent implements OnInit {
  isOpen: boolean =false;

  constructor(
    private _el: ElementRef,
    private Token: TokenService
  ) { }

  ngOnInit() {
  }

  isAdmin() {
    if(this.Token.userRole() === 1) {
      return true;
    }
  }
}
