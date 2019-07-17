import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '../../../node_modules/@angular/router';
import { TokenService } from '../services/token.service';
import { REACTIVE_DRIVEN_DIRECTIVES } from '../../../node_modules/@angular/forms/src/directives';

@Injectable()
export class RoleGuardService implements CanActivate {
  constructor(public token: TokenService, public router: Router) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    // this will be passed from the route config
    // on the data property
    const expectedRole = route.data.expectedRole;
    
    if (
      this.token.loggedIn() || 
      this.token.userRole() !== expectedRole
    ) {
      window.alert("You do not have permission to view this page!");
      this.router.navigateByUrl('/dashboard');
      return false;
    }
    return true;
  }
}
