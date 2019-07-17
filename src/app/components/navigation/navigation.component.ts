import { Component, OnInit, AfterViewInit, AfterContentChecked } from '@angular/core';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit , AfterContentChecked{

  public loggedIn: boolean;
  public isExpired: boolean;

  constructor(
    private auth: AuthenticationService,
    private router: Router,
    private Token: TokenService
  ) { }

  ngOnInit() {
    this.auth.authStatus.subscribe(value => this.loggedIn = value);
  }
  
  ngAfterContentChecked() {
    this.isExpired = this.Token.isChecked()
  }

  logOut(event: MouseEvent) {
    event.preventDefault();
    this.Token.remove();
    this.auth.changeAuthStatus(false);
    this.router.navigateByUrl('/user-login');
  }

  isAdmin() {
    if(this.Token.userRole() === 1) {
      return true;
    }
  }

}
