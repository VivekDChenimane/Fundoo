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
}
