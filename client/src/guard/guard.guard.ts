import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate } from '../../node_modules/@angular/router/src/utils/preactivation';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;
  private router : Router;
  canActivate(){
    if(window.localStorage.getItem('token')!=null){
      return true;
    }
    else{
      this.router.navigate["/login"]
      return;
    }
  }
}
