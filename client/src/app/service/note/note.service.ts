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
}
