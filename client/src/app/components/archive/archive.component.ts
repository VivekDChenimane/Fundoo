import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../service/note/note.service'

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  cardData:any
  constructor(private service:NoteService) { }

  ngOnInit() {
    // this.getAllArchiveCard();

  }
  // getAllArchiveCard(){
  //   this.service.archivenotes().subscribe(data=>{
  //     this.cardData= data["data"]["data"];  
  //     return
  //   })
  // }
}
