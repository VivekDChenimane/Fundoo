/******************************************************************************
 *
 *  Purpose         : this program is to display the icons in notes.
 *  @description    
 * 
 *  @file           : note-icons.component.ts
 *  @overview       : To display the dashboard.
 *  @module         : note-icons.ts - This is optional if expeclictly its an npm or local package
 *  @author         : Vivek D Chenimane <vivekdchenimane.com>
 *  @version        : 1.0
 *  @since          : 02-03-2019
 *
 ******************************************************************************/
/**
 * importing all thhe file from various module
 */
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { NoteService } from '../../service/note/note.service';
@Component({
  selector: 'app-note-icons',
  templateUrl: './note-icons.component.html',
  styleUrls: ['./note-icons.component.scss']
})
export class NoteIconsComponent implements OnInit {
  @Input() card: any
  @Output() colorEvent = new EventEmitter();
  colorArray =
    [[
      { 'color': '#B39DDB', 'name': 'purple' },
      { 'color': '#F48FB1', 'name': 'pink' },
      { 'color': '#FFAB40', 'name': 'brown' },
      { 'color': '#E0E0E0', 'name': 'gray' }
    ],
    [
      { 'color': '#FFFFFF', 'name': 'White' },
      { 'color': '#E53935', 'name': 'Red' },
      { 'color': '#EF6C00', 'name': 'Orange' },
      { 'color': '#FFEB3B', 'name': 'Yellow' }],
    [
      { 'color': '#B2FF59', 'name': 'green' },
      { 'color': '#69F0AE', 'name': 'teal' },
      { 'color': '#81D4FA', 'name': 'blue' },
      { 'color': '#0288D1', 'name': 'darkblue' }
    ]]
  constructor(private noteService:NoteService) { }

  ngOnInit() {
  }

  changeColor(color, card) {
    this.colorEvent.emit(color);
    if(card==undefined){
      console.log("no note id");
      return ;
    }
    else{
      card.color=color;
      this.noteService.updateColor({
        "color": color,
        'noteIdList': [card.id]
      }).subscribe(data =>{
        console.log(data, "data from update color")},
        err=>{
          console.log(err,"err");
        })
    }
  }
  deleteNote(card){
    if(card==undefined){
      console.log("no note id");
      return ;
    }
    else{
    console.log("Card need to be deleted");
    this.noteService.deleteNote({
      "isdeleted":true,
      "noteIdList":[card.id]
  }).subscribe(data=>{
    console.log(data)
  },err=>console.log(err))
  }
}

}
