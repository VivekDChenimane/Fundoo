import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private service:HttpService ) { }
  getnotes(){
    let url='notes/getNotesList';
    return this.service.httpGetData(url);
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
}
