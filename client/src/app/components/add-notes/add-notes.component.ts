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
import { Component, OnInit } from '@angular/core';
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
  constructor(private httpService:HttpService ,private router : Router) { }

  ngOnInit() {
  }

  noteTitle=new FormControl('', [Validators.required]);
  noteContent=new FormControl('',[Validators.required]);
  addNote(){
    this.flag = !this.flag;
    if(this.flag){
    console.log(localStorage.getItem('token'));
    if(this.noteTitle.value==''||this.noteContent.value==''){
    }
    else{
      var note = {
        "title":this.noteTitle.value,
        "description":this.noteContent,
        "labelIdList":[],
        "checklist":"",
        "isPined":"",
        "isArchived":"",
        "color":"",
        "reminder":[],
        "collaberators":""
      }
      this.httpService.postUrlEncoded('notes/addNotes',note).subscribe(data=>{
        console.log(data);
      })
    }
   }
  }
}
