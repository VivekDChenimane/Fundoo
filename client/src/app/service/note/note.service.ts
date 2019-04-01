import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
 
  constructor(private service:HttpService ) { }
  getnotes(){
    return this.service.httpGetData('notes/getNotesList');
  }
  addnote(data){
    return this.service.postUrlEncoded('notes/addNotes',data);
  }
  updatenote(data){
    return this.service.encodedPostForm('notes/updateNotes',data)
  }
  updateColor(data){
    return this.service.postJSON('notes/changesColorNotes',data)
  }
  deleteNote(data){
    return this.service.postJSON('notes/deleteForeverNotes',data)
  }
  archiveNote(data){
    return this.service.postJSON('notes/archiveNotes',data)
  }
  archiveNotes(){
    return this.service.httpGetData('notes/getArchiveNotesList')
  }
  trashNote(data){
    return this.service.postJSON('notes/trashNotes',data)
  }
  trashNotes(){
    return this.service.httpGetData('notes/getTrashNotesList')
  }
  unarchiveNote(data){
    return this.service.postJSON('notes/archiveNotes',data);
  }
  pinUnpinNote(data){
    return this.service.postJSON('notes/pinUnpinNotes',data);
  }
  noteLabel(data){
    return this.service.postJSON('/noteLabels',data);
  }
  getLabels(){
    return this.service.httpGetData('noteLabels/getNoteLabelList');
  }
  deleteLabel(data){
    return this.service.encodedPostFormDelete('noteLabels/'+data+'/deleteNoteLabel')
  }
  addUpdateReminderNote(data){
    return this.service.postJSON('notes/addUpdateReminderNotes',data);
  }
  searchUserList(data){
    return this.service.postJSON('user/searchUserList',data)
  }
  addCollaborator(noteId,data){
    return this.service.postJSON('notes/'+noteId+'/AddcollaboratorsNotes',data)
  }
  updateLabel(labelId, RequestBody){
    return this.service.postJSON('/noteLabels/'+labelId+'/updateNoteLabel',RequestBody)
  }
  removeCollaborator(noteId,collaboratorId){
    return this.service.encodedPostFormDelete('/notes/'+noteId+'/removeCollaboratorsNotes/'+collaboratorId)
  }
}
