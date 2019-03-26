import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Label } from '../../Models/model.model';
import { NoteService } from '../../service/note/note.service';

@Component({
  selector: 'app-label-dialog',
  templateUrl: './label-dialog.component.html',
  styleUrls: ['./label-dialog.component.scss']
})
export class LabelDialogComponent implements OnInit {
  
  labelName: string;
  ArrayOfLabel: Label[];
  constructor(public dialogRef: MatDialogRef<LabelDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Label[], public noteService: NoteService) { }

  ngOnInit() {
    this.ArrayOfLabel = this.data;
  }
  clear() {
    this.labelName = ' ';
  }

  addLabel() {
    try {
      if (this.labelName != undefined && this.labelName !== '') {
        let userid = localStorage.getItem('userid');
        let label = {
          userId: userid,
          label: this.labelName,
          isDeleted: "false"
        }
        this.noteService.noteLabel(label).subscribe(message => {
          console.log(message);
          this.labelName='';
          this.ArrayOfLabel.push(message);
        })
        return;
      }
    } 
    catch (error) {
      console.log("Error in add Label" + error);
    };
  }

  deleteLabel(labelid) {
    try{
      this.noteService.deleteLabel(labelid).subscribe(data=>{
        console.log(data);
        let count=0;
        this.ArrayOfLabel.forEach(label => {
          if (label.id == labelid) {
            this.ArrayOfLabel.splice(count, 1);
          }
          else
            count++;
        });
      })
    }catch(error){
      console.log("Errror in delete label"+error);
    }

  }
  edit(label){
    let body = {
      "label": label.label,
      "isDeleted": false,
      "id": label.id,
      "userId": label.id
    }
  }
  close() {
    this.dialogRef.close();
  }
}
