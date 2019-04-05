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
import { NoteService } from '../../service/note/note.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnDestroy {
  
  destroy$: Subject<boolean> = new Subject<boolean>();
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  search:string;
  check
  labelNotes;
  ArrayOfLabel:Label;
  constructor(public dialog: MatDialog,changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router : Router,private dataService:DataService,public noteService:NoteService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  /**
   * @description To get all the labels when home component is started.
   */
  ngOnInit() {
    this.getLabel();
  }
  /**
   * @description To navigate to particular components 
   */
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
  navigateReminder(){
    this.router.navigate(['reminder']);
  }
  /**
   * @description To update the search value to variable in the data service.
   */
  searchfor(){
    if(this.search==''){
      this.dataService.changeMessage("nosearching");
    }
    else
    this.dataService.changeMessage(this.search);
  }
  /**
   * @description To clear the local storage and to go back for login page.
   */
  logout(){
    localStorage.removeItem('token');
    this.router.navigate['/login'];
  }
  /**
   * @description To unsubscribe the resources
   */
  ngOnDestroy(){
    this.mobileQuery.removeListener(this._mobileQueryListener);
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
  openLabelNotes(labelName){
    
      this.router.navigate(['label',labelName]);
    // })
    
  }
  getLabel() {
    try{
      this.noteService.getLabels()
      .pipe(takeUntil(this.destroy$))
      .subscribe(result => {   
        // this.ArrayOfLabel=result["data"]["details"];
        console.log(result["data"]["details"])
        this.dataService.updateLabels(result["data"]["details"]);
        this.dataService.currentLabels.subscribe(message => {this.ArrayOfLabel = message})  ;
       })
    }catch{
      console.log("Error in getLabel");
    }
  }
    
        
  openLabelDialog(){
    const dialogRef = this.dialog.open(LabelDialogComponent, {
      data:this.ArrayOfLabel
});
dialogRef.afterClosed().subscribe(result => {

})
}

}
