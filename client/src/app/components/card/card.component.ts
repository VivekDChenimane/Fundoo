import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NoteDialogComponent } from '../note-dialog/note-dialog.component';
import { NoteService } from '../../service/note/note.service';
import { DataService } from "../../service/data/data.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
@Input() card
@Input() search: boolean = true;
@Output() pinEvent = new EventEmitter();
@Output() removeEvent= new EventEmitter();
searchValue: String;
model: any;
title: any;
isArchived: any;
isDeleted: any;
isPined: any;
description: any;
  constructor(public dialog: MatDialog, private noteService: NoteService, private dataService: DataService) { }

  ngOnInit() {
    this.dataService.currentMessage.subscribe(message => {this.searchValue = message})  ;
   }
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
      width: '55%',
      // hasBackdrop: false,
      // disableClose: false
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'deleted') {

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
        else if(card.isPined!=this.isPined){
          this.updatePin(card);
        }
        else {
          console.log("changes not needed");
        }
      }
    });
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
      // this.pinEvent.emit(card);
      // this.removeEvent(true,card);

    })  
  }
  removeReminder(id){
    console.log(id);
      this.noteService.deleteReminder(
        {
          "noteIdList": [id]
        })
        .subscribe(
          (data) => {
            console.log(data);
            this.card.reminder=[];
          },
          error => {
          })
  }
  removeLabelTag(labelId){
  this.noteService.removeLabelTags(this.card.id,labelId,
    {
      "noteId":this.card.id,  
      "lableId":labelId
    })
    .subscribe(data=>{
     console.log(data);
     this.remove(labelId);
    })
  }
  removeEvent1($event) {
    this.removeEvent.emit($event)
  }
  remove(labelId){
      var count = 0;
      this.card.noteLabels.forEach(label => {
        if (labelId== label.id) {
          this.card.noteLabels.splice(count, 1);
        }
        else
          count++;
      });
      return;

  }
}
