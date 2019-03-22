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
import { Model } from '../../Models/model.model';

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.scss']
})
export class AddNotesComponent implements OnInit {
  /**
   * @description To toggle between add note or not.
   * Default set to true.
   */
  flag=true;
  /**
   * @description To hold the model of the note.
   */
  card :any;
  @Output() newNoteEvent = new EventEmitter();
  constructor(private noteService:NoteService) {
    /**
     * @description Create instance of the class Model.
     */
    this.card = new Model();
  }
  color:string = '#FFFFFF';
  ngOnInit() {
    // console.log(this.card); 
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
      return
    }
    else{
      this.card.title=this.noteTitle.value;
      this.card.description=this.noteContent.value;
      console.log(this.card)
      // var note = {
      //   "id":undefined,
      //   "title":this.noteTitle.value,
      //   "description":this.noteContent.value,
      //   "labelIdList":[],
      //   "checklist":"",                 
      //   "isPined":this.card.isPined,
      //   "isArchived":this.card.isArchived,
      //   "color":this.card.color,
      //   "reminder":[],
      //   "collaberators":""
      // }
      this.noteService.addnote(this.card).subscribe(data=>{
        let note=data;
        this.noteTitle.reset();
        this.noteContent.reset();
        this.card.color="#FFFFFF";
        console.log(note['status']['details']);
        this.newNoteEvent.emit(note['status']['details']);
      })
    }
   }
  }
}
