import { Component, OnInit,Input, EventEmitter, Output } from '@angular/core';
import { NoteService } from '../../service/note/note.service';

@Component({
  selector: 'app-delete-icons',
  templateUrl: './delete-icons.component.html',
  styleUrls: ['./delete-icons.component.scss']
})
export class DeleteIconsComponent implements OnInit {
  @Input() card: [];
  @Output() removeEvent = new EventEmitter();
  constructor(private noteService:NoteService) { }

  ngOnInit() {
  }
  deleteNote(card){
    this.noteService.deleteNote({
      "isDeleted":true,
      "noteIdList":[card.id]
  }).subscribe(message=>{
      console.log(message);
      this.remove();
  });
  }
  remove(){
    this.removeEvent.emit();
}
}