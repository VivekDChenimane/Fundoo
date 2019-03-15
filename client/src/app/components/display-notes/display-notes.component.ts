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
import { NoteService } from '../../service/note/note.service';

export interface matdialog{
  title:string;
  description:string;
  color:any;
}

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {
  
  @Input() notes:any;
  color:string;
  model: any;
  title:any;
  description:any;
  constructor(public dialog: MatDialog , private noteService:NoteService) { }
  show(card){
    // console.log(card.title);
    this.description=card.description;
    this.title=card.title;
  }
  openDialog(card): void {
    
    const dialogRef = this.dialog.open(NoteDialogComponent, {
      position: {top: '12.5%', left: '25%'},
      data:card,
      width: '600px',
      // hasBackdrop: false,
      // disableClose: false
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(card.title!=this.title||card.description!=this.description){
        this.model={
          noteId:card.id,
          title:card.title,
          description:card.description
        }
        this.noteService.updatenote(this.model).subscribe(message=>{
          console.log(message);
        })
      }
      else{
        console.log("changes not needed");
      }
    });
  }

  ngOnInit() {
  } 
  // changeColor($event,card) {
  //   // card.color = $event;
  //   console.log("color");
    
  // }


  // isHovering = false;
// mouseHovering() {
//     this.isHovering = true;
// }
// mouseLeaving() {
//     this.isHovering = false;
// }

}
