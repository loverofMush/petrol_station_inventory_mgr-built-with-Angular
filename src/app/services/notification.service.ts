import { Injectable } from '@angular/core';

export class NotificationServiceAlertType {
  icon: string;
  style: string;

  constructor(icon?:string, style?:string) {
    this.icon = icon || 'error_outline';
    this.style = style || 'alert-danger';
  }
}

export class AlertType {
  static INFO    : NotificationServiceAlertType = new NotificationServiceAlertType('info_outline', 'alert alert-info');
  static WARNING : NotificationServiceAlertType = new NotificationServiceAlertType('warning', 'alert alert-warning');
  static SUCCESS : NotificationServiceAlertType = new NotificationServiceAlertType('check', 'alert alert-success');
  static ERROR   : NotificationServiceAlertType = new NotificationServiceAlertType('error_outline', 'alert alert-danger');
}

@Injectable()
export class NotificationService {

  public title: string;
  public message: string;
  public messageAvailable: boolean;
  public alertType: NotificationServiceAlertType;

  constructor() {
    this.alertType = AlertType.ERROR;
  }

  postMessage(title: string = '', message:string = '', alertType?:NotificationServiceAlertType): void {
    this.message = message;
    this.title = title;
    this.messageAvailable = true;
    this.alertType = alertType || AlertType.ERROR;
  }

  clearMessage(): void {
    this.title = '';
    this.message = '';
    this.messageAvailable = false;
  }
}
