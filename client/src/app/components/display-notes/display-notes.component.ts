import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {
  
  @Input() message:any;
  constructor() { }

  ngOnInit() {
    console.log(this.message);
  } 
  isHovering = false;

mouseHovering() {
    this.isHovering = true;
}
mouseLeaving() {
    this.isHovering = false;
}

}
