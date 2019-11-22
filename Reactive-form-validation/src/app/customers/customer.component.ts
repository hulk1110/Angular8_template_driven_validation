import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { Customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customer = new Customer();

  customerForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    // this.customerForm = this.fb.group({
    //   firstName: '',
    //   lastName: '',
    //   email: '',
    //   sendCatalog: '',
    // });
    // 2nd syntax
    this.customerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', Validators.required, Validators.maxLength(50)],
      email: ['', Validators.required, Validators.email],
      sendCatalog: { value: true, disabled: false },
    });

    //  this.customerForm = this.fb.group({
    //   firstName: '',
    //   lastName: '',
    //   email: '',
    //   sendCatalog: '',
    // });

    // this.customerForm = new FormGroup({
    //   firstName: new FormControl(),
    //   lastName: new FormControl(),
    //   email: new FormControl(),
    //   sendCatalog: new FormControl(true),
    // });

  }

  save() {

  }

  populateTestData() {
    this.customerForm.setValue(
      {
        firstName: 'Nishant',
        lastName: 'Srivastava',
        email: ' nishantsayshellotou@gmail.com',
        sendCatalog: false
      }

    );
  }
}
