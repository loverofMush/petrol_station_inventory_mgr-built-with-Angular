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

  sales_open(_el) {
    this.isOpen = true;
    _el.preventDefault();
    this._el.nativeElement.querySelector('#menu-item').classList.add('open_sub');
      let div = this._el.nativeElement.querySelector('#sub_menu');
      div.style.display = 'block'
  }

  sales_close(_el) {
    this.isOpen = false;
    _el.preventDefault();
    this._el.nativeElement.querySelector('#menu-item').classList.remove('open_sub');
    let div = this._el.nativeElement.querySelector('#sub_menu');
    div.style.display = 'none'
  }

  products_open(_el) {
    this.isOpen = true;
    _el.preventDefault();
    this._el.nativeElement.querySelector('#menu-item-1').classList.add('open_sub');
      let div = this._el.nativeElement.querySelector('#sub_menu_1');
      div.style.display = 'block'
  }

  products_close(_el) {
    this.isOpen = false;
    _el.preventDefault();
    this._el.nativeElement.querySelector('#menu-item-1').classList.remove('open_sub');
    let div = this._el.nativeElement.querySelector('#sub_menu_1');
    div.style.display = 'none'
  }

  stocks_open(_el) {
    this.isOpen = true;
    _el.preventDefault();
    this._el.nativeElement.querySelector('#menu-item-2').classList.add('open_sub');
      let div = this._el.nativeElement.querySelector('#sub_menu_2');
      div.style.display = 'block'
  }

  stocks_close(_el) {
    this.isOpen = false;
    _el.preventDefault();
    this._el.nativeElement.querySelector('#menu-item-2').classList.remove('open_sub');
    let div = this._el.nativeElement.querySelector('#sub_menu_2');
    div.style.display = 'none'
  }

  supplies_open(_el) {
    this.isOpen = true;
    _el.preventDefault();
    this._el.nativeElement.querySelector('#menu-item-3').classList.add('open_sub');
      let div = this._el.nativeElement.querySelector('#sub_menu_3');
      div.style.display = 'block'
  }

  supplies_close(_el) {
    this.isOpen = false;
    _el.preventDefault();
    this._el.nativeElement.querySelector('#menu-item-3').classList.remove('open_sub');
    let div = this._el.nativeElement.querySelector('#sub_menu_3');
    div.style.display = 'none'
  }

  users_open(_el) {
    this.isOpen = true;
    _el.preventDefault();
    this._el.nativeElement.querySelector('#menu-item-i').classList.add('open_sub');
      let div = this._el.nativeElement.querySelector('#sub_menu_i');
      div.style.display = 'block'
  }

  users_close(_el) {
    this.isOpen = false;
    _el.preventDefault();
    this._el.nativeElement.querySelector('#menu-item-i').classList.remove('open_sub');
    let div = this._el.nativeElement.querySelector('#sub_menu_i');
    div.style.display = 'none'
  }

  suppliers_open(_el) {
    this.isOpen = true;
    _el.preventDefault();
    this._el.nativeElement.querySelector('#menu-item-4').classList.add('open_sub');
      let div = this._el.nativeElement.querySelector('#sub_menu_4');
      div.style.display = 'block'
  }

  suppliers_close(_el) {
    this.isOpen = false;
    _el.preventDefault();
    this._el.nativeElement.querySelector('#menu-item-4').classList.remove('open_sub');
    let div = this._el.nativeElement.querySelector('#sub_menu_4');
    div.style.display = 'none'
  }

  employees_open(_el) {
    this.isOpen = true;
    _el.preventDefault();
    this._el.nativeElement.querySelector('#menu-item-5').classList.add('open_sub');
      let div = this._el.nativeElement.querySelector('#sub_menu_5');
      div.style.display = 'block'
  }

  employees_close(_el) {
    this.isOpen = false;
    _el.preventDefault();
    this._el.nativeElement.querySelector('#menu-item-5').classList.remove('open_sub');
    let div = this._el.nativeElement.querySelector('#sub_menu_5');
    div.style.display = 'none'
  }

  expenses_open(_el) {
    this.isOpen = true;
    _el.preventDefault();
    this._el.nativeElement.querySelector('#menu-item-6').classList.add('open_sub');
      let div = this._el.nativeElement.querySelector('#sub_menu_6');
      div.style.display = 'block'
  }

  expenses_close(_el) {
    this.isOpen = false;
    _el.preventDefault();
    this._el.nativeElement.querySelector('#menu-item-6').classList.remove('open_sub');
    let div = this._el.nativeElement.querySelector('#sub_menu_6');
    div.style.display = 'none'
  }

  isAdmin() {
    if(this.Token.userRole() === 1) {
      return true;
    }
  }
}
