/******************************************************************************
 *
 *  Purpose         : this program is to register the user.
 *  @description    
 * 
 *  @file           : register.component.ts
 *  @overview       : To the user.
 *  @module         : register.ts - This is optional if expeclictly its an npm or local package
 *  @author         : Vivek D Chenimane <vivekdchenimane.com>
 *  @version        : 1.0
 *  @since          : 02-03-2019
 *
 ******************************************************************************/
/**
 * importing all thhe file from various module
 */
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpService } from '../../service/http/http.service';
import { Router } from '@angular/router';
import { log } from 'util';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  maxDate = new Date();
  constructor(private service: HttpService, private router: Router) { }

  ngOnInit() {
  }
  /**
 * @description firstName validation 
 */
  firstName = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*')]);
  /**
 * @description lastName validation 
 */
  lastName = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*')]);
  /**
 * @description email validation 
 */
  email = new FormControl('', [Validators.required, Validators.email]);
  /**
 * @description phone validation 
 */
  phone = new FormControl('', [Validators.required, Validators.pattern('[0-9]*'), Validators.maxLength(12), Validators.minLength(10)]);
  /**
 * @description password validation 
 */
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  /**
 * @description repeatPassword validation 
 */
  repeatPassword = new FormControl('', [Validators.required, Validators.minLength(8)]);
  /**
  * @description Gets firstName error message
  */
  firstNameErrorMessage() {
    return this.firstName.hasError('required') ? 'Enter the name' :
      this.firstName.hasError('pattern') ? 'Enter a valid name' :
        '';
  }
  /**
  * @description Gets lastName error message
  */
  lastNameErrorMessage() {
    return this.lastName.hasError('required') ? 'Enter the name' :
      this.lastName.hasError('pattern') ? 'Enter a valid name' :
        '';
  }
  /**
  * @description Gets mail error message
  */
  emailErrorMessage() {
    return this.email.hasError('required') ? 'email is required' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }
  /**
  * @description Gets phone error message
  */
  phoneErrorMessage() {
    return this.phone.hasError('required') ? 'Enter the phone number' :
      this.phone.hasError('pattern') ? 'Enter numbers only' :
        this.phone.hasError('minlength') ? 'Should be of minimum of 10' :
          this.phone.hasError('maxlength') ? 'Should be of maximum of 12' :
            '';
  }
  /**
  * @description Gets password error message
  */
  passwordErrorMessage() {
    return this.password.hasError('required') ? 'Enter the password' :
      this.password.hasError('minlength') ? 'The password should of minimum of 6 digits' :
        '';
  }
  /**
  * @description Gets repeatPassword error message
  */
  repeatPasswordErrorMessage() {
    return this.repeatPassword.hasError('required') ? 'Enter the password' :
      this.repeatPassword.hasError('minlength') ? 'The password should of minimum of 6 digits' :
        '';
  }

  getValues() {
    var user = {
      "firstName": this.firstName.value,
      "lastName": this.lastName.value,
      "phoneNumber": this.phone.value,
      "imageUrl": "",
      "service": "basic",
      "email": this.email.value,
      "emailVerified": true,
      "createdDate": "",
      "modifiedDate": "",
      "password": this.password.value
    }
    console.log(user);
    if (this.password.value == this.repeatPassword.value) {
      this.service.postRequest("user/userSignUp", user).subscribe(data => {
        console.log(data);
        this.router.navigate(['login']);
      },
        err => {
          console.log(err);
        })
    }
  }
}
