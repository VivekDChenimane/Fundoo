import { Component, OnInit,Input } from '@angular/core';
import { NoteService } from '../../service/note/note.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-label-list',
  templateUrl: './label-list.component.html',
  styleUrls: ['./label-list.component.scss']
})
export class LabelListComponent implements OnInit {

  constructor(public noteService:NoteService, private router : Router) { }
@Input() ArrayOfLabel;
labelNotes;
  ngOnInit() {
  }
  openLabelNotes(labelName){
    this.noteService.getNotesListByLabel(labelName).subscribe(message=>{
      this.labelNotes=message['data']['data']
      this.router.navigate(['label']);
    })
    
  }
}
