/******************************************************************************
 *
 *  Purpose         : this program is to display the note in dashboard.
 *  @description    
 * 
 *  @file           : add-notes.component.ts
 *  @overview       : To display the note in dashboard.
 *  @module         : add-notes.ts - This is optional if expeclictly its an npm or local package
 *  @author         : Vivek D Chenimane <vivekdchenimane.com>
 *  @version        : 1.0
 *  @since          : 02-03-2019
 *
 ******************************************************************************/
/**
 * importing all the file from various module
 */
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NoteService } from '../../service/note/note.service';
import { Model } from '../../Models/model.model';
import { MatDialog } from '@angular/material';
import { CollaboratorDialogComponent} from '../collaborator-dialog/collaborator-dialog.component';
@Component({ 
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.scss']
})
export class AddNotesComponent implements OnInit {
  /**
   * @description To toggle between add note or not.
   * Default set to true.
   */
  flag=true;
  /**
   * @description To hold the model of the note.
   */
  card :any;
  @Output() newNoteEvent = new EventEmitter();
  constructor(public dialog: MatDialog,private noteService:NoteService) {
    /**
     * @description Create instance of the class Model.
     */
  
  }
  color:string = '#FFFFFF';
  ngOnInit() {
    this.card = new Model();
  }
  /**
   * @description To pin and unpin the note.
   */
  changePin(){
    this.card.isPined=!this.card.isPined;
   
  }
  // variable to hold the title of the card,which should not be empty.
  noteTitle=new FormControl('', [Validators.required]);
    // variable to hold the description of the card.
  noteContent=new FormControl('');
  /**
   * @description To add the new card by calling note service for Api.
   */
  addNote(){
    //flag to close as soon as the card is saved.
    this.flag = !this.flag;
    if(this.flag){
    if(this.noteTitle.value==''){
      return
    }
    else{
      console.log(this.card);
      
      this.card.title=this.noteTitle.value;
      this.card.description=this.noteContent.value;
      this.card.collaborators=JSON.stringify(this.card.collaborators);
      this.card.collaberators=this.card.collaborators;
      this.card.noteLabels=JSON.stringify(this.card.noteLabels);
      this.card.labelIdList=JSON.stringify(this.card.labelIdList);
      console.log(this.card);
      try{
      //call addnote method of the note service which contains the exact URL for the API service.
      this.noteService.addnote(this.card).subscribe(data=>{
        let note=data;
        //Reset the values.
        this.noteTitle.reset();
        this.noteContent.reset();
        this.card.color="#FFFFFF";
        console.log(note['status']['details']);
        this.card = new Model();
        //Emit the note to parent to make the new card visible.
        this.newNoteEvent.emit(note['status']['details']);
      })
    }catch(error){
      console.log(error+"Error in the note service of add note");
    }
    }
   }
  }
  openCollaborator(){
    const dialogRef = this.dialog.open(CollaboratorDialogComponent, {
    width:'auto',
      data:{collaborators:this.card.collaborators,
        id:this.card.id
      }
    });
  } 
  removeReminder(){
    this.card.reminder=[];
  }
}
