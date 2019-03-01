/******************************************************************************
 *
 *  Purpose         : this program is to reset the forgot password.
 *  @description    
 * 
 *  @file           : forgot-password.component.ts
 *  @overview       : reset the forgot password.
 *  @module         : forgot-password.ts - This is optional if expeclictly its an npm or local package
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
import { HttpService } from '../../service/http/http.service';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private service: HttpService) { }

  ngOnInit() {
  } 
  isValid = false;
  email = new FormControl('', [Validators.required, Validators.email]); //Email validation

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }
 
  passwordReset(email) {
    console.log(email);
    var user = {
      "email":email
    }
    this.service.postRequest(user, 'forgot').subscribe((data: any) => {
      console.log(data);
      
      this.isValid = true;
    })
    
    
  }
}
