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
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { DataService } from '../../service/data/data.service';
import { Label } from '../../Models/model.model';
import { LabelDialogComponent } from '../label-dialog/label-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnDestroy {
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  search:string;
  label:Label;
  constructor(public dialog: MatDialog,changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router : Router,private dataService:DataService) {
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
  navigateSearch(){
    this.router.navigate(['search']);
  }
  searchfor(){
    // console.log(this.search);
    if(this.search==''){
      // this.search=null;
      this.dataService.changeMessage("nosearching");
    }
    else
    this.dataService.changeMessage(this.search);
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate['/login'];
  }
  ngOnDestroy(){
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  openLabelDialog(){
    const dialogRef = this.dialog.open(LabelDialogComponent, {
      data:{id:"",
        label: "",
        isDeleted: false,
        userId:""}
});
dialogRef.afterClosed().subscribe(result => {

})
}
}
