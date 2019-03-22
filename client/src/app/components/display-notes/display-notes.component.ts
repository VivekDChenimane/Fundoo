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
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NoteDialogComponent } from '../note-dialog/note-dialog.component';
import { NoteService } from '../../service/note/note.service';
import { DataService } from "../../service/data/data.service";

export interface matdialog {
  title: string;
  description: string;
  color: any;
}

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {

  @Input() notes: any;
  // @Output() pinEvent = new EventEmitter();
  color: string;
  @Input() search: boolean = true;
  searchValue: String;
  model: any;
  title: any;
  isArchived: any;
  isDeleted: any;
  isPined: any;
  description: any;
  constructor(public dialog: MatDialog, private noteService: NoteService, private dataService: DataService) { }
  show(card) {
    this.description = card.description;
    this.title = card.title;
    this.isArchived = card.isArchived;
    this.isDeleted = card.isDeleted;
    this.isPined = card.isPined;
  }
  openDialog(card): void {

    const dialogRef = this.dialog.open(NoteDialogComponent, {
      position: { top: '12.5%' },
      data: card,
      // width: '238px',
      // hasBackdrop: false,
      // disableClose: false
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'deleted') {
        this.removeEvent(card)
      }
      else {
        if (card.title != this.title || card.description != this.description) {
          this.model = {
            noteId: card.id,
            title: card.title,
            description: card.description
          }
          this.noteService.updatenote(this.model).subscribe(message => {
            console.log(message);
          })
        }
        else if (card.isArchived != this.isArchived || card.isDeleted) {
          this.removeEvent(card);
        }
        else if(card.isArchived!=this.isPined){
          this.updatePin(card);
        }
        else {
          console.log("changes not needed");
        }
      }
    });
  }

  ngOnInit() {
    this.dataService.currentMessage.subscribe(message => { this.searchValue = message });
  }
  changePin(card){
    card.isPined=!card.isPined;
    this.updatePin(card);
  }
    updatePin(card){
    this.model={
      noteIdList:[card.id],
      isPined:card.isPined
    }
    this.noteService.pinUnpinNote(this.model).subscribe(message=>{
      console.log(message);
      this.removeEvent(card);
    })

  }
  removeEvent(card) {
    var count = 0;
    this.notes.forEach(note => {
      if (card.id == note.id) {
        this.notes.splice(count, 1);
        console.log(this.notes);
      }
      else
        count++;
    });
    return;
  }
}
