import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication.service';
import { TokenService } from '../../../services/token.service';
import { Router } from '@angular/router';
import { SnotifyService } from '../../../../../node_modules/ng-snotify';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public form= {
    email: null,
    name: null,
    password: null,
    password_confirmation: null
  };

  public error = {
    email: null,
    name: null,
    password: null,
    password_confirmation: null
  };

  constructor(
    private auth: AuthenticationService,
    private tokenService: TokenService,
    private router: Router,
    private notify: SnotifyService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.notify.info('Wait...', {timeout:5000})
    this.auth.signup(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    )
  }

  handleResponse(data) {
    this.tokenService.handle(data.access_token);
    this.auth.changeAuthStatus(true);
    this.router.navigateByUrl('/dashboard');
  }

  handleError(error) {
    this.notify.error(error.error.error);
  }
}

