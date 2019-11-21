import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl ,FormBuilder } from '@angular/forms';

import { Customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customer = new Customer();

  customerForm: FormGroup;
  constructor(private fb :FormBuilder) { }

  ngOnInit() {

this.customerForm= this.fb.group({
  firstName:'Nishant',
  lastName:'',
  email:'',
  sendCatalog:'',
});

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
