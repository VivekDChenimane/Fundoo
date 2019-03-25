import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Label } from '../../Models/model.model';
import { NoteService } from '../../service/note/note.service';

@Component({
  selector: 'app-label-dialog',
  templateUrl: './label-dialog.component.html',
  styleUrls: ['./label-dialog.component.scss']
})
export class LabelDialogComponent implements OnInit {
  // newLabel:Label;
  labelName:string;
  constructor(public dialogRef: MatDialogRef<LabelDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Label,public noteService:NoteService) { }

  ngOnInit() {
  }
  addLabel(){
    if(this.labelName!=undefined && this.labelName!==''){
      let userid=localStorage.getItem('userid');
      let label={
        userId:userid,
        label:this.labelName,
        isDeleted:"false"
      }
    //   this.data.id="";
    //   this.data.userId=userid;
    // this.data.label=this.labelName;
    // this.data.isDeleted=false;
      this.noteService.noteLabel(label).subscribe(message => {
        console.log(message);
      })
    }
  }
}
