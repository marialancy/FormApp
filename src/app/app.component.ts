import { Component, Optional,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  outputs:['inputValueChange']
})
export class AppComponent implements OnInit {
  loginForm:FormGroup;
  formSubmitted=false;
  firstName='';
  lastName='';
  address='';
  address2='';
  phone='';

  constructor(private fb: FormBuilder) {
    this.createForm();
    
  }
   createForm() {
    this.loginForm = this.fb.group({
       firstname: ['', Validators.required],
       lastname:['',Validators.required],
       address: ['', Validators.required ],
       address2:['',Optional],
       phone:['',Optional]
    });
  }
  display(){
    this.formSubmitted=true;
    this.firstName=this.loginForm.value.firstname;
    this.lastName=this.loginForm.value.lastname;
    this.address=this.loginForm.value.address;
    this.address2=this.loginForm.value.address2;
    this.phone=this.loginForm.value.phone;

  }
  reset(){
    this.formSubmitted=false;
    this.loginForm.reset();
  }
  validate(e:any){
    //  var phoneNumber=e.target.value.replace(/[^\d]/g,'')
    //  console.log(phoneNumber)
    //  this.phone=phoneNumber
    if (e.target.value.match('[0-9]')){
      this.phone=e.target.value;
      if(e.target.value.length==10){
        this.phoneFormat(this.phone)
      }
    }
    else{
      this.phone=null;
      this.loginForm.controls['phone'].reset();
    }
  }
  phoneFormat(phoneValue){
    phoneValue='('+this.phone.slice(0,3)+') '+this.phone.slice(3,6)+'-'+this.phone.slice(6);
    this.phone=phoneValue;

  }
ngOnInit(){
  
}
  
}
