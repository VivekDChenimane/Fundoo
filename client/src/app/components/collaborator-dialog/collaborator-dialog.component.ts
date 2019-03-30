import { Component, OnInit,Output, EventEmitter,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { NoteService } from '../../service/note/note.service';
import { Label } from '../../Models/model.model';

@Component({
  selector: 'app-collaborator-dialog',
  templateUrl: './collaborator-dialog.component.html',
  styleUrls: ['./collaborator-dialog.component.scss']
})
export class CollaboratorDialogComponent implements OnInit {
  name:string;
  email:string;
  searchResultList;
  collaborator:Label;
  constructor(public dialogRef: MatDialogRef<CollaboratorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Label,public noteService:NoteService) { }

  ngOnInit() {
    this.name=localStorage.getItem('firstName');
    this.email=localStorage.getItem('email');
  }
  
  searchlist(data){
    this.noteService.searchUserList(
      {"searchWord":data}).subscribe(data=>{
      console.log(data)
      this.searchResultList=data['data']['details'];
    })
  }
}
 