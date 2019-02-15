import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {  HttpService} from '../../service/http/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  maxDate = new Date();
  constructor(private service : HttpService, private router : Router) { }

  ngOnInit() {
  }
  firstName = new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]*')]);
  lastName = new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]*')]);
  email = new FormControl('',[Validators.required,Validators.email]);
  phone = new FormControl('',[Validators.required,Validators.pattern('[0-9]*'),Validators.maxLength(12),Validators.minLength(10)]);
  password = new FormControl('',[Validators.required,Validators.minLength(8)]);
  repeatPassword = new FormControl('',[Validators.required,Validators.minLength(8)]);
  firstNameErrorMessage(){
    return this.firstName.hasError('required') ? 'Enter the name':
    this.firstName.hasError('pattern') ? 'Enter a valid name':
    '';
  }
  lastNameErrorMessage(){
    return this.lastName.hasError('required') ? 'Enter the name':
    this.lastName.hasError('pattern') ? 'Enter a valid name':
    '';
  }
  emailErrorMessage(){
    return this.email.hasError('required') ? 'email is required':
    this.email.hasError('email') ? 'Not a valid email':
    '';
  }
  phoneErrorMessage(){
    return this.phone.hasError('required') ? 'Enter the phone number':
    this.phone.hasError('pattern') ? 'Enter numbers only':
    this.phone.hasError('minlength') ? 'Should be of minimum of 10':
    this.phone.hasError('maxlength') ? 'Should be of maximum of 12':
    '';
  }
  passwordErrorMessage(){
    return this.password.hasError('required') ? 'Enter the password':
    this.password.hasError('minlength') ? 'The password should of minimum of 6 digits':
    '';
  }
  repeatPasswordErrorMessage(){
    return this.repeatPassword.hasError('required') ? 'Enter the password':
    this.repeatPassword.hasError('minlength') ? 'The password should of minimum of 6 digits':
    '';
  }
  getValues ( firstName,lastName,email,phone,password,repeatPassword){
    var user = {
      "firstName":firstName,
      "lastName":lastName,
      "phoneNumber":phone,
      "imageUrl":"",
      "service":"",
      "email":email,
      "password":password
    }
    console.log(user);
    if(password == repeatPassword){
      this.service.postRequest("user/userSignUp",user);
    }
  }
}
