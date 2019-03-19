import { Component, OnInit ,Inject, EventEmitter, Output} from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA, MatCard} from '@angular/material';
import { matdialog } from '../display-notes/display-notes.component';
import { NoteService } from '../../service/note/note.service';

@Component({
  selector: 'app-note-dialog',
  templateUrl: './note-dialog.component.html',
  styleUrls: ['./note-dialog.component.scss']
})
export class NoteDialogComponent implements OnInit {
  @Output() removeEvent = new EventEmitter();
  constructor(public dialogRef: MatDialogRef<NoteDialogComponent>,@Inject(MAT_DIALOG_DATA, ) public data:matdialog,private noteService:NoteService) { }
 card=this.data;
  ngOnInit() {
    console.log(this.data);
  }
  changeColor($event) {
    this.card.color = $event;
  }
  closeDialog(){
    this.dialogRef.close();
  }
  remove(){
    this.dialogRef.close("deleted");
  }
}
