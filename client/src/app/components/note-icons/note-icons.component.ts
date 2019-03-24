/******************************************************************************
 *
 *  Purpose         : this program is to display the icons in notes.
 *  @description    
 * 
 *  @file           : note-icons.component.ts
 *  @overview       : To display the dashboard.
 *  @module         : note-icons.ts - This is optional if expeclictly its an npm or local package
 *  @author         : Vivek D Chenimane <vivekdchenimane.com>
 *  @version        : 1.0
 *  @since          : 02-03-2019
 *
 ******************************************************************************/
/**
 * importing all thhe file from various module
 */
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { NoteService } from '../../service/note/note.service';
import { MatDialog } from '@angular/material';
import { CollaboratorDialogComponent } from '../collaborator-dialog/collaborator-dialog.component';
@Component({
  selector: 'app-note-icons',
  templateUrl: './note-icons.component.html',
  styleUrls: ['./note-icons.component.scss']
})
export class NoteIconsComponent implements OnInit {
  @Input() card: any
  @Output() removeEvent = new EventEmitter();
  @Output() addNoteEvent = new EventEmitter();
  @Input() show=true;
  count :number =0;
  model: any;
  colorArray =
    [[
      { 'color': '#B39DDB', 'name': 'purple' },
      { 'color': '#F48FB1', 'name': 'pink' },
      { 'color': '#FFAB40', 'name': 'brown' },
      { 'color': '#E0E0E0', 'name': 'gray' }
    ],
    [
      { 'color': '#FFFFFF', 'name': 'White' },
      { 'color': '#E53935', 'name': 'Red' },
      { 'color': '#EF6C00', 'name': 'Orange' },
      { 'color': '#FFEB3B', 'name': 'Yellow' }],
    [
      { 'color': '#B2FF59', 'name': 'green' },
      { 'color': '#69F0AE', 'name': 'teal' },
      { 'color': '#81D4FA', 'name': 'blue' },
      { 'color': '#0288D1', 'name': 'darkblue' }
    ]]
  constructor(private noteService:NoteService,public dialog:MatDialog) { }

  ngOnInit() {
    
  }
  remove($needed){
           this.removeEvent.emit($needed);
  }
  changeColor(color) {
    if(this.card.id==undefined){
      this.card.color=color;
      return ;
    }
    else{
      this.card.color=color;
      this.noteService.updateColor({
        "color": color,
        'noteIdList': [this.card.id]
      }).subscribe(data =>{
        console.log(data, "data from update color")},
        err=>{
          console.log(err,"err");
        })
    }
  }
  updateNote(){
    if(this.card.id==undefined){
      this.addNoteEvent.emit();
      return ;
    }
    else{ 
      this.addNoteEvent.emit();
      this.model={
        noteId:this.card.id,
        title:this.card.title,
        description:this.card.description
      }
      this.noteService.updatenote(this.model).subscribe(message=>{
        console.log(message);
        this.remove(false);
      })
     }
    }
 

  changeArchiveNote(){
    // console.log(this.card.isArchived);
    this.card.isArchived=!this.card.isArchived;
    this.model={
      noteIdList:[this.card.id],
      isArchived:this.card.isArchived
    }
    console.log("in service");
    
    this.noteService.unarchiveNote(this.model).subscribe(message=>{
      console.log("change archive done");
      console.log(message);
      this.remove(true);
    })
  }

trashNote(){
  if(this.card.id==undefined){
    console.log("can't delete creating note");
    return ;
  }
  else{
  console.log("Card need to be deleted");
  this.noteService.trashNote({
    "isDeleted":true,
    "noteIdList":[this.card.id]
}).subscribe(data=>{
  this.remove(true);
},err=>console.log(err))
}
}
addCollaborator(){
  const dialogRef = this.dialog.open(CollaboratorDialogComponent, {
    maxWidth: 'auto',
    height: 'auto',
    data:this.card.id
  });
}
}
