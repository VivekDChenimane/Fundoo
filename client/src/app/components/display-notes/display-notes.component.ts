/******************************************************************************
 *
 *  Purpose         : this program is to display the all notes in dashboard.
 *  @description    
 * 
 *  @file           : display-notes.component.ts
 *  @overview       : To display the note in dashboard.
 *  @module         : display-notes.ts - This is optional if expeclictly its an npm or local package
 *  @author         : Vivek D Chenimane <vivekdchenimane.com>
 *  @version        : 1.0
 *  @since          : 02-03-2019
 *
 ******************************************************************************/
/**
 * importing all the file from various module
 */
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NoteDialogComponent } from '../note-dialog/note-dialog.component';
import { NoteService } from '../../service/note/note.service';
import { DataService } from "../../service/data/data.service";

/**
 * @description Create a interface for knowing attributes the data.
 */
export interface matdialog {
  title: string;
  description: string;
  color: any; 
}

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {

  @Input() notes: any;
  @Output() pinEvent = new EventEmitter();
  @Input() search: boolean = true;
  searchValue: String;
  model: any;
  constructor(private noteService: NoteService, private dataService: DataService) { }

  ngOnInit() {
    }
  removeEvent($event,card) {
    if($event){
    var count = 0;
    this.notes.forEach(note => {
      if (card.id == note.id) {
        this.notes.splice(count, 1);
        console.log(this.notes);
      }
      else
        count++;
    });
    return;
  }
}

}
