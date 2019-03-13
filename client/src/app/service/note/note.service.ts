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
    return this.service.postJSON('notes/archiveNote',data)
  }
}
