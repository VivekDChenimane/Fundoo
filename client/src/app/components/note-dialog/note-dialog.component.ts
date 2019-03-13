import { Component, OnInit ,Inject} from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA, MatCard} from '@angular/material';
import { matdialog } from '../display-notes/display-notes.component';

@Component({
  selector: 'app-note-dialog',
  templateUrl: './note-dialog.component.html',
  styleUrls: ['./note-dialog.component.scss']
})
export class NoteDialogComponent implements OnInit {
  
  constructor(public dialogRef: MatDialogRef<NoteDialogComponent>,@Inject(MAT_DIALOG_DATA) public data:matdialog) { }
 card=this.data;
 color:string
  ngOnInit() {
    console.log(this.data);
  }
  changeColor($event) {
    this.card.color = $event;
    console.log(this.color)
  }
  closeDialog(){
    this.dialogRef.close();
  }

}
