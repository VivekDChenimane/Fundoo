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
import { addNoteModel } from '../../Models/model';

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.scss']
})
export class AddNotesComponent implements OnInit {
  exampleNote;
  flag=true;
  flag1=true;
  card :any;
  // {
  //   "isPined":false,
  //   "isArchived":false,
  //   "color":"#FFFFFF",
  //   "reminder":[],
  //   "collaberators":""
  // };
  @Output() newNoteEvent = new EventEmitter();
  constructor(private noteService:NoteService) { 
    this.card = new addNoteModel();
  }
  color:string = '#FFFFFF';
  ngOnInit() {
    this.card 
  }
  changePin(){
    this.card.isPined=!this.card.isPined;
   
  }
  noteTitle=new FormControl('', [Validators.required]);
  noteContent=new FormControl('');
 
  addNote(){
    this.flag = !this.flag;
    if(this.flag){
    if(this.noteTitle.value==''){
      console.log("can't be empty");
      
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
      this.noteService.addnote(note).subscribe(data=>{
        this.exampleNote=data;
        this.noteTitle.reset();
        this.noteContent.reset();
        this.card.color="#FFFFFF";
        console.log(this.exampleNote['status']['details']);
        this.newNoteEvent.emit(this.exampleNote['status']['details']);
      })
    }
   }
  }
}
