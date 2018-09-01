import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication.service';
import { TokenService } from '../../../services/token.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SnotifyService } from '../../../../../node_modules/ng-snotify';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form = {
    email: null,
    password: null
  }
  
  public error = null;
  return: string = '';
  returnUrl: string;

  constructor(
    private auth: AuthenticationService,
    private tokenService: TokenService,
    private router: Router,
    private route: ActivatedRoute,
    private notify: SnotifyService
  ) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
    this.return = this.route.snapshot.queryParams['returnUrl'] || '/dashboard/expenses/create-expense';
  }

  onSubmit() {
    this.notify.info('Wait...', {timeout:5000})
    this.auth.isAuthenticated(this.form).subscribe(
      data => {
        this.handleResponse(data)
      },
      error => {
        this.handleError(error)
      }
    )
  }

  handleResponse(data) {
    this.tokenService.handle(data.access_token);
    if(this.tokenService.userRole() === 1) {
      this.router.navigateByUrl(this.returnUrl);
    } else {
      this.router.navigateByUrl(this.return);
    }
    this.auth.changeAuthStatus(true);
  }

  handleError(error) {
    this.notify.error(error.error.error);
  }
}
