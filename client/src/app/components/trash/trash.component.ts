import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../service/note/note.service'

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {

  constructor(public noteService:NoteService) { }

  ngOnInit() {
    this.getAllTrachCards();
  }
  getAllTrachCards(){
    // this.noteService.
  }
}
