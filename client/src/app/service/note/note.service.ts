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
  deleteReminder(body){
    return this.service.postJSON('notes/removeReminderNotes',body)
  }
  getReminderNotes(){
    return this.service.httpGetData('notes/getReminderNotesList');
  }
  addLabelToNote(noteId,labelId,body){
    return this.service.postJSON('notes/'+noteId+'/addLabelToNotes/'+labelId+'/add',body)
  }
  getNotesListByLabel(labelName){
    return this.service.postJSON('notes/getNotesListByLabel/'+labelName,'');
  }
  removeLabelTags(id,labelId,body){
    return this.service.postJSON('/notes/'+ id +'/addLabelToNotes/'+labelId+'/remove',body);
  }
  uploadImage(data){
    return this.service.postImage('user/uploadProfileImage',data)
  }
  getNoteDetails(cardId){
    return this.service.httpGetData('notes/getNotesDetail/'+cardId);
  }
  addQuestionAndAnswer(body){
    return this.service.postJSON('/questionAndAnswerNotes/addQuestionAndAnswer',body)
  }
  ratingQuestionAndAnswer(id,data){
    return this.service.postJSON('questionAndAnswerNotes/rate/'+id,data)
  }
  replyQuestionAndAnswer(noteId,data){
    return this.service.postJSON('questionAndAnswerNotes/reply/'+noteId,data)
  }
  likeQuestionAndAnswer(id,data){
    return this.service.postJSON('questionAndAnswerNotes/like/'+id,data)
  }
}
