/******************************************************************************
 *
 *  Purpose         : this program is to display the all notes in dashboard.
 *  @description    
 * 
 *  @file           : display-notes.component.ts
 *  @overview       : To display the note in dashboard.
 *  @module         : display-notes.ts - This is optional if expeclictly its an npm or local package
 *  @author         : Vivek D Chenimane <vivekdchenimane.com>
 *  @version        : 1.0
 *  @since          : 02-03-2019
 *
 ******************************************************************************/
/**
 * importing all the file from various module
 */
import { Component, OnInit,Input,Inject } from '@angular/core';
import {MatDialog} from '@angular/material';
import {NoteDialogComponent} from '../note-dialog/note-dialog.component';

export interface matdialog{
  array:[];
}

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {
  
  @Input() message:any;
  color:string;
  constructor(public dialog: MatDialog) { }
  openDialog(card): void {
    const dialogRef = this.dialog.open(NoteDialogComponent, {
      data:card,
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
  } 
  isHovering = false;
mouseHovering() {
    this.isHovering = true;
}
mouseLeaving() {
    this.isHovering = false;
}

}
