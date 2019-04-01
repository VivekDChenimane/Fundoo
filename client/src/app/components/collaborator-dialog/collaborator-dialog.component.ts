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
  collaborator;
  collaborators:[];
  constructor(public dialogRef: MatDialogRef<CollaboratorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,public noteService:NoteService) { }

  ngOnInit() {
    this.name=localStorage.getItem('firstName');
    this.email=localStorage.getItem('email');
    console.log(this.data.collaborators)
    this.collaborators=this.data.collaborators

  }
  
  searchlist(data){
    if(data!=''){
    this.noteService.searchUserList(
      {"searchWord":data}).subscribe(data=>{
      console.log(data)
      this.searchResultList=data['data']['details'];
    })
  }
}
addCollaborator(userDetails){
  console.log(userDetails);
  let collaboratorBody = {
    "firstName": userDetails.firstName,
    "lastName": userDetails.lastName,
    "email": userDetails.email,
    "userId": userDetails.userId
  }
  console.log(collaboratorBody)
  this.noteService.addCollaborator(this.data['id'], collaboratorBody).subscribe(result => {
    // this.collaborators.push(collaboratorBody);
    this.collaborator="";
    console.log(result)
  })
}
removeCollaborator(collaboratorId){
  console.log(this.collaborators)
  console.log(collaboratorId);
  console.log(this.data['id'])
  this.noteService.removeCollaborator(this.data['id'],collaboratorId).subscribe(result=>{
   console.log(result);
 })
}
}