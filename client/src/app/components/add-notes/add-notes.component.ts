/******************************************************************************
 *
 *  Purpose         : this program is to display the note in dashboard.
 *  @description    
 * 
 *  @file           : add-notes.component.ts
 *  @overview       : To display the note in dashboard.
 *  @module         : add-notes.ts - This is optional if expeclictly its an npm or local package
 *  @author         : Vivek D Chenimane <vivekdchenimane.com>
 *  @version        : 1.0
 *  @since          : 02-03-2019
 *
 ******************************************************************************/
/**
 * importing all the file from various module
 */
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NoteService } from '../../service/note/note.service';

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.scss']
})
export class AddNotesComponent implements OnInit {
  flag=true;
  flag1=true;
  card  = {
    "isPined":false,
    "isArchived":false,
    "color":"#FFFFFF",
    "reminder":[],
    "collaberators":""
  };
  @Output() newNoteEvent = new EventEmitter();
  constructor(private noteService:NoteService) { }
  color:string = '#FFFFFF';
  ngOnInit() {
    this.card 
  }

  noteTitle=new FormControl('', [Validators.required]);
  noteContent=new FormControl('');
  // changeColor($event) {
  //   this.color = $event;
  // }
  pinned(){
    this.flag1=!this.flag1;
  }
  addNote(){
    this.flag = !this.flag;
    if(this.flag){
    if(this.noteTitle.value==''){
      console.log("value barthilla");
      
      return
    }
    else{
      var note = {
        "id":undefined,
        "title":this.noteTitle.value,
        "description":this.noteContent.value,
        "labelIdList":[],
        "checklist":"",                 
        "isPined":this.card.isPined,
        "isArchived":this.card.isArchived,
        "color":this.card.color,
        "reminder":[],
        "collaberators":""
      }
      this.newNoteEvent.emit(note);
      this.noteService.addnote(note).subscribe(data=>{
        console.log(data);
        this.noteTitle.reset();
        this.noteContent.reset();
        this.card.color="#FFFFFF";
      })
      // console.log(this.card.isArchived+this.card.color);
    }
   }
  }
}
