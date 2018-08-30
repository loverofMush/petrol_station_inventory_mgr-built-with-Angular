import { Component, OnInit } from '@angular/core';
import { DealerService } from '../../../services/dealer.service';
import { NgForm } from '../../../../../node_modules/@angular/forms';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-create-supplier',
  templateUrl: './create-supplier.component.html',
  styleUrls: ['./create-supplier.component.css']
})
export class CreateSupplierComponent implements OnInit {

  public form= {
    name: null,
    code: null
  };

  constructor(
    private dealerService: DealerService,
    private notify: SnotifyService
  ) { }

  ngOnInit() {
  }

  saveProduct(newSupplierForm: NgForm) {
    this.dealerService.addSupplier(this.form).subscribe(
      data => {
        this.handleResponse(data)
      },
      error => {
        this.handleError(error)
      }
    )
    newSupplierForm.resetForm();
  }

  handleResponse(res) {
    this.notify.success(res.data, {timeout:0});
  }

  handleError(error) {
    this.notify.error(error.error.error);
  }
}
