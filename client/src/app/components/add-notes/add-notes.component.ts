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
import { HttpService} from '../../service/http/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.scss']
})
export class AddNotesComponent implements OnInit {
  flag=true;
  @Output() newNoteEvent = new EventEmitter();
  constructor(private httpService:HttpService ,private router : Router) { }
  color:string = '#FFFFFF';
  ngOnInit() {
  }

  noteTitle=new FormControl('', [Validators.required]);
  noteContent=new FormControl('');
  changeColor($event) {
    this.color = $event;
  }
  addNote(){
    this.flag = !this.flag;
    if(this.flag){
    if(this.noteTitle.value==''){
      return
    }
    else{
      var note = {
        "title":this.noteTitle.value,
        "description":this.noteContent.value,
        "labelIdList":[],
        "checklist":"",                 
        "isPined":"",
        "isArchived":"",
        "color":this.color,
        "reminder":[],
        "collaberators":""
      }
      this.newNoteEvent.emit(note);
      this.httpService.postUrlEncoded('notes/addNotes',note).subscribe(data=>{
        console.log(data);
        this.noteTitle.reset();
        this.noteContent.reset();
      })
      
    }
   }
  }
}
