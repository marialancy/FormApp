import { Component, Optional } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loginForm:FormGroup;
  formSubmitted=false;
  firstName='';
  lastName='';
  address='';
  address2='';
  constructor(private fb: FormBuilder) {
    this.createForm();
  }
   createForm() {
    this.loginForm = this.fb.group({
       firstname: ['', Validators.required ],
       lastname:['',Validators.required],
       address: ['', Validators.required ],
       address2:['',Optional]
    });
  }
  display(){
    this.formSubmitted=true;
    this.firstName=this.loginForm.value.firstname;
    this.lastName=this.loginForm.value.lastname;
    this.address=this.loginForm.value.address;
    this.address2=this.loginForm.value.address2;
  }
  reset(){
    this.formSubmitted=false;
    this.loginForm.reset();
  }
  
}
