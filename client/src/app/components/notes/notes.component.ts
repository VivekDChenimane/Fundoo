/******************************************************************************
 *
 *  Purpose         : this program is to display the note in dashboard.
 *  @description    
 * 
 *  @file           : notes.component.ts
 *  @overview       : To display the note in dashboard.
 *  @module         : notes.ts - This is optional if expeclictly its an npm or local package
 *  @author         : Vivek D Chenimane <vivekdchenimane.com>
 *  @version        : 1.0
 *  @since          : 02-03-2019
 *
 ******************************************************************************/
/**
 * importing all the file from various module
 */
import { Component, OnInit, OnChanges } from '@angular/core';
import { NoteService } from '../../service/note/note.service'
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit,OnChanges {
  constructor(private service:NoteService) { }

  ngOnInit() {
    this.getAllCard();
  }
  
  ngOnChanges(){
    console.log("Onchanges"); 
  }
  cardData=[];l
  getAllCard(){
    
    this.service.getnotes().subscribe(data=>{
      this.cardData= data["data"]["data"];
      return
    })
  }
}
