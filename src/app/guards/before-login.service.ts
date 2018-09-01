import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';
import { Location } from '@angular/common';

@Injectable()
export class BeforeLoginService implements CanActivate {
  route: any;

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | 
  Observable<boolean> | Promise<boolean> {
    return !this.token.loggedIn()
  }
  
  constructor(
    private token: TokenService,
    private router: Router,
    private location: Location
  ) { 
    
  }
}
