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
  ArrayOfLabel:Label[]=[];
  constructor(public dialog: MatDialog,changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router : Router,private dataService:DataService,public noteService:NoteService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.getLabel();
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
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
  getLabel() {
    try{
      this.noteService.getLabels()
      .pipe(takeUntil(this.destroy$))
      .subscribe(result => {
        this.ArrayOfLabel=result['data']['deatails'];
        // this.ArrayOfLabel=this.ArrayOfLabel.reverse();
        // console.log(result["data"]["details"]);
        this.ArrayOfLabel=result["data"]["details"];
        // console.log(this.ArrayOfLabel);
        //.forEach(element => {
        //   // this.ArrayOfLabel.push(result["data"]["details"][element]);
        //   console.log(result["data"]["details"][element]);
        // });
       
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
