import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NoteService } from '../../service/note/note.service';
import { Label } from '../../Models/model.model';

@Component({
  selector: 'app-collaborator-dialog',
  templateUrl: './collaborator-dialog.component.html',
  styleUrls: ['./collaborator-dialog.component.scss']
})
export class CollaboratorDialogComponent implements OnInit {
  name: string;
  email: string;
  searchResultList;
  collaborator;
  collaborators: any[];
  collaboratorBody;
  constructor(public dialogRef: MatDialogRef<CollaboratorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data, public noteService: NoteService) { }

  ngOnInit() {
    this.name = localStorage.getItem('firstName');
    this.email = localStorage.getItem('email');
    console.log(this.data.collaborators)
    this.collaborators = this.data.collaborators
    if (this.data['id'] == undefined) {
      if (this.data['collaborators'] == undefined) {
        this.collaborators = [];
      }
    }
  }

  searchlist(data) {
    if (data != '') {
      this.noteService.searchUserList(
        { "searchWord": data }).subscribe(data => {
          console.log(data)
          this.searchResultList = data['data']['details'];
        })
    }
  }
  addCollaborator() {
    try {
      if (this.email !== this.collaboratorBody.email && this.collaboratorBody.email != '') {

        if (this.data['id'] == undefined) {
          this.collaborators.push(this.collaboratorBody);
          this.collaborator = "";
        }
        else {
          this.noteService.addCollaborator(this.data['id'], this.collaboratorBody).subscribe(result => {
            this.collaborators.push(this.collaboratorBody);
            this.collaborator = "";
            console.log(result)
          })
        }
      }
    } catch (error) {
      console.log(error + "Error during adding collaborator");
    }
  }
  setCollaborator(userDetails) {
    if (this.email !== userDetails.email && userDetails.email != '') {
      this.collaborator = userDetails.email;
      console.log(userDetails);
      this.collaboratorBody = {
        "firstName": userDetails.firstName,
        "lastName": userDetails.lastName,
        "email": userDetails.email,
        "userId": userDetails.userId
      }
    }
  }
  removeCollaborator(collaboratorId) {
    console.log(this.collaborators)
    console.log(collaboratorId);
    console.log(this.data['id'])
    if (this.data['id'] == !undefined) {
      this.noteService.removeCollaborator(this.data['id'], collaboratorId).subscribe(result => {
        console.log(result);
      })
    }
    var count = 0;
    this.collaborators.forEach(collaborator => {
      console.log("enter for each")
      console.log(collaborator.userId + "=" + collaboratorId)
      if (collaborator.userId == collaboratorId) {
        console.log("enter each")
        this.collaborators.splice(count, 1);
        console.log(this.collaborators);
      }
      else
        count++;
    });
    return;
  }
  cancel() {
    this.dialogRef.close();
  }
}