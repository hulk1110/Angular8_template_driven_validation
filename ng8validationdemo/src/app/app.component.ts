import { Component } from '@angular/core';
declare var NgForm:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() { }
  title = 'template-driven-form-validation-in-angular8';

  public user = {};
  //this.user.fullName='';
  signup(){
    alert('form fields are validated successfully!');  
  }
}
