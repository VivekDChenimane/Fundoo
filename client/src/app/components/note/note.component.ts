import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  flag = true;
  constructor() { }

  ngOnInit() {
  }

  addNote(){
    this.flag = !this.flag;
   }
}
