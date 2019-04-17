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
import { ChangeDetectorRef, Component, OnInit, OnDestroy } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { DataService } from '../../service/data/data.service';
import { ImageDialogComponent } from '../image-dialog/image-dialog.component';
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
export class HomeComponent implements OnInit, OnDestroy {
  view = true;
  name: string;
  email: string;
  imageProfile: string;
  image;
  destroy$: Subject<boolean> = new Subject<boolean>();
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  search: string;
  check
  labelNotes;
  profile;
  imageFile = null;

  ArrayOfLabel: Label;
  constructor(public dialog1: MatDialog, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router: Router, private dataService: DataService, public noteService: NoteService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  /**
   * @description To get all the labels when home component is started.
   */
  ngOnInit() {
    this.getLabel();
    this.name = localStorage.getItem('firstName');
    this.email = localStorage.getItem('email');
    this.dataService.currentPhoto.subscribe(message => { this.image = message })
  }
  /**
   * @description To navigate to particular components 
   */
  navigateArchive() {
    this.router.navigate(['archive']);
  }
  navigateHome() {
    this.router.navigate(['home']);
  }
  navigateTrash() {
    this.router.navigate(['trash']);
  }
  navigateSearch() {
    this.router.navigate(['search']);
  }
  navigateReminder() {
    this.router.navigate(['reminder']);
  }
  /**
   * @description To update the search value to variable in the data service.
   */
  searchfor() {
    if (this.search == '') {
      this.dataService.changeMessage("nosearching");
    }
    else
      this.dataService.changeMessage(this.search);
  }
  /**
   * @description To clear the local storage and to go back for login page.
   */
  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
    this.ngOnInit();
  }
  /**
   * @description To unsubscribe the resources
   */
  ngOnDestroy() {
    this.mobileQuery.removeListener(this._mobileQueryListener);
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
  openLabelNotes(labelName) {

    this.router.navigate(['label', labelName]);
    // })

  }
  getLabel() {
    try {
      this.noteService.getLabels()
        .pipe(takeUntil(this.destroy$))
        .subscribe(result => {
          // this.ArrayOfLabel=result["data"]["details"];
          console.log(result["data"]["details"])
          this.dataService.updateLabels(result["data"]["details"]);
          this.dataService.currentLabels.subscribe(message => { this.ArrayOfLabel = message });
        })
    } catch{
      console.log("Error in getLabel");
    }
  }


  openLabelDialog() {
    const dialogRef = this.dialog1.open(LabelDialogComponent, {
      data: this.ArrayOfLabel
    });
    dialogRef.afterClosed().subscribe(result => {

    })
  }
  changeView() {
    this.view = !this.view;
    this.dataService.changeView(this.view);
  }
  public newImage = localStorage.getItem('imageUrl');
  img = environment.profileUrl + this.newImage;
  onFileUpload(event) {
    this.imageFile = event.path[0].files[0];
    const uploadImage = new FormData();
    uploadImage.append('file', this.imageFile, this.imageFile.name);
    this.openPicture(event);
  }
  openPicture(data) {
    const dialogRef = this.dialog1.open(ImageDialogComponent, {
      width: 'auto',
      height: 'auto',
      data: data,
      // disableClose: true
    })
    dialogRef.afterClosed().subscribe(result => {
      if (result == "imageChange") {
        console.log("Correct ag banthu");
      }
      this.dataService.currentPhoto.subscribe(response => this.profile = response)
      if (this.profile = true) {
        console.log("banthu")
        this.imageProfile = localStorage.getItem('imageUrl');
        this.img = environment.profileUrl + this.imageProfile;
      }
    })
  }
}
