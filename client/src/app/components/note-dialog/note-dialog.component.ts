import { Component, OnInit ,Inject} from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA} from '@angular/material';
import { matdialog } from '../display-notes/display-notes.component';

@Component({
  selector: 'app-note-dialog',
  templateUrl: './note-dialog.component.html',
  styleUrls: ['./note-dialog.component.scss']
})
export class NoteDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NoteDialogComponent>,@Inject(MAT_DIALOG_DATA) public data:matdialog) { }

  ngOnInit() {
  }

}
