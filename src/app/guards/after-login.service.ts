import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { TokenService } from '../services/token.service';

@Injectable()
export class AfterLoginService implements CanActivate{

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (!this.token.loggedIn() && !this.token.isChecked()) {
      return true;
    } 

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/user-login'], { queryParams: { returnUrl: state.url }});
    return false;
  }
  
  constructor(
    private token: TokenService,
    private router: Router
  ) { }

}
