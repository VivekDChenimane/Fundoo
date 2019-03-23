/******************************************************************************
 *
 *  Purpose         : this program is to redirect the valid user to the dashboard 
 *  @description    
 * 
 *  @file           : login.component.ts
 *  @overview       : to show the dashboard to an user.
 *  @module         : login.component.ts - This is optional if expeclictly its an npm or local package
 *  @author         : Vivek D Chenimane <vivekdchenimane.com>
 *  @version        : 1.0
 *  @since          : 02-03-2019
 *
 ******************************************************************************/
/**
 * importing all the file from various module
 */
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {  HttpService} from '../../service/http/http.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private service : HttpService, private router : Router) { }

  ngOnInit() {
  }
/**
   * @description Hide and show password
   */
  hide = true; 

  /**
   * @description email validation 
   */
  email = new FormControl('', [Validators.required, Validators.email]); 

  /**
   * @description Password validation
   */
  password = new FormControl('', [Validators.required, Validators.minLength(6)]);
  
  /**
   * @description Gets mail error message
   */
  getErrorMessage() {
    return this.email.hasError('required') ?
      'You must enter a value' : this.email.hasError('email') ? 'Not a valid email' : '';
  }
  
  /**
   * @description Gets password error message
   */
  getPasswordErrorMessage() {
    return this.password.hasError('required') ? "Can't be empty" : this.password.hasError('minlength') ? 'Wrong password' : '';
  }
  
  /**
   * @description Login after validating the data and checking the database whether the user exists or not
   * @param email 
   * @param password 
   */
  secureLogin(email, password) { 
    var user = {
      "email": email,
      "password": password
    }
    console.log(user);
    this.service.postRequest('user/login',user).subscribe((data: any)  =>  {
      localStorage.setItem('token', data['id']);
      localStorage.setItem('email', data["email"]);
      localStorage.setItem('firstName', data["firstName"])
      localStorage.setItem('lastName', data["lastName"])
      localStorage.setItem('userid', data["userId"]);
      localStorage.setItem('imageUrl', data["imageUrl"]);
      if (data != 'undefined') {
        if (data.id) {
           this.router.navigate(['home']);
        } else {
          alert("Something went wrong")
        }
      }
    });
  }

/**
 * @description Navigates to registration page
 */
  register() { 
    this.router.navigate(['registration']);
  }
  
/**
 * @description Navigates to forgot password page
 */
  forgot() {
    this.router.navigate(['forgot']);
  }
}