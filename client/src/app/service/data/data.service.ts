import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Label } from '../../Models/model.model'

@Injectable({
  providedIn: 'root'
})
export class DataService {
labelDefault:Label={
  id:'',
  label:'',
  isDeleted:false,
  userId:''
}
  private messageSource = new BehaviorSubject('nosearching');
  currentMessage = this.messageSource.asObservable();

  private labelNotes= new BehaviorSubject<Label>(this.labelDefault);
  currentLabels=this.labelNotes.asObservable();

  constructor() { }
  changeMessage(message: string) {
    this.messageSource.next(message)
  }
  updateLabels(message:Label){
    this.labelNotes.next(message)
  }
}
