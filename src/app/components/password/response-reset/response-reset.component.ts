import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../../services/authentication.service';
import { SnotifyService } from '../../../../../node_modules/ng-snotify';
import { NgForm } from '../../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-response-reset',
  templateUrl: './response-reset.component.html',
  styleUrls: ['./response-reset.component.css']
})
export class ResponseResetComponent implements OnInit {

  public error = {
    email: null,
    password: null,
    password_confirmation: null
  };

  public form = {
    email: null,
    password: null,
    password_confirmation: null,
    resetToken: null
  }
  constructor(
    private route: ActivatedRoute,
    private auth: AuthenticationService,
    private router: Router,
    private notify: SnotifyService
  ) { 
    route.queryParams.subscribe(params => {
      this.form.resetToken = params['token']
    });
  }

  ngOnInit() {
  }

  onSubmit(responseForm:NgForm) {
    this.notify.info('Wait...', {timeout:5000})
    this.auth.changePassword(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error )
    )
    responseForm.resetForm();
  }

  handleResponse(data) {
    let _router = this.router;
    this.notify.confirm('Password changed successfully', {
      buttons: [
        {
          text: 'Okay',
          action: toster => {
            _router.navigateByUrl('/user-login'),
            this.notify.remove(toster.id)
          } 
        },
      ]
    })
  }

  handleError(error) {
    this.error = error.error.errors;
  }

}
