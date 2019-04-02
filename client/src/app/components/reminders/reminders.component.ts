import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../service/note/note.service';
@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.scss']
})
export class RemindersComponent implements OnInit {

  constructor(public noteService:NoteService) { }
  reminderNotes
  ngOnInit() {
    this.getReminder();
  }
  getReminder(){
    this.noteService.getReminderNotes().subscribe(data=>{
      this.reminderNotes=data['data']['data']
    })
  }
}
