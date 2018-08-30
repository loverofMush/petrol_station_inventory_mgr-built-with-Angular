import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication.service';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.css']
})
export class RequestResetComponent implements OnInit {

  public form = {
    email: null
  }
  
  public error = null;

  constructor(
    private auth: AuthenticationService,
    private notify: SnotifyService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.notify.info('Wait...', {timeout:5000})
    this.auth.sendPasswordResetLink(this.form).subscribe(
      data => {
        this.handleResponse(data)
      },
      error => {
        this.handleError(error)
      }
    )
  }

  handleResponse(res) {
    this.notify.success(res.data, {timeout:0});
    this.form.email = null;
  }

  handleError(error) {
    this.notify.error(error.error.error);
  }

}
