import { Component, OnInit, OnChanges } from '@angular/core';
import { NoteService } from '../../service/note/note.service'
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit,OnChanges {
  parentMessage = "message from parent"
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
      console.log("notes=>");
      console.log(data["data"]["data"])
      this.cardData= data["data"]["data"];
      return
    })
  }
}