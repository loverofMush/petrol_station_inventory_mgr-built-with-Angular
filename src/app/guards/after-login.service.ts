import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { TokenService } from '../services/token.service';

@Injectable()
export class AfterLoginService implements CanActivate{

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | 
  Observable<boolean> | Promise<boolean> {

    if (this.token.loggedIn() && !this.token.isChecked()) {
      return true;
    } else {
      this.router.navigate(['/user-login'], {
        queryParams: {
          return: state.url
        }
      });
    }
  }
  
  constructor(
    private token: TokenService,
    private router: Router
  ) { }

}
