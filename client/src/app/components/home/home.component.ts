/******************************************************************************
 *
 *  Purpose         : this program is to display the dashboard.
 *  @description    
 * 
 *  @file           : home.component.ts
 *  @overview       : To display the dashboard.
 *  @module         : home.ts - This is optional if expeclictly its an npm or local package
 *  @author         : Vivek D Chenimane <vivekdchenimane.com>
 *  @version        : 1.0
 *  @since          : 02-03-2019
 *
 ******************************************************************************/
/**
 * importing all the file from various module
 */
import { ChangeDetectorRef,Component, OnInit,OnDestroy } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnDestroy {
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router : Router) { 
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
  }
  navigateArchive(){
    this.router.navigate(['archive']);
  }
  navigateHome(){
    this.router.navigate(['home']);
  }
  navigateTrash(){
    this.router.navigate(['trash']);
  }
  ngOnDestroy(){
    this.mobileQuery.removeListener(this._mobileQueryListener);

  }
}
