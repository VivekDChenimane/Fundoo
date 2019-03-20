import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reminder-icon',
  templateUrl: './reminder-icon.component.html',
  styleUrls: ['./reminder-icon.component.scss']
})
export class ReminderIconComponent implements OnInit {
  remindershow:boolean=true;
  value
  constructor() { }

  ngOnInit() {
  }
  toggle() {
    this.remindershow = !this.remindershow;
}
}
