/******************************************************************************
 *
 *  Purpose         : this program is to display the all notes in dashboard.
 *  @description    
 * 
 *  @file           : display-notes.component.ts
 *  @overview       : To display the note in dashboard.
 *  @module         : display-notes.ts - This is optional if expeclictly its an npm or local package
 *  @author         : Vivek D Chenimane <vivekdchenimane.com>
 *  @version        : 1.0
 *  @since          : 02-03-2019
 *
 ******************************************************************************/
/**
 * importing all the file from various module
 */
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {
  
  @Input() message:any;
  message1:string;
  constructor() { }

  ngOnInit() {
    console.log(this.message);
  } 
  isHovering = false;
  changeColor($event) {
    this.message1 = $event;
    console.log(this.message1);
  }
mouseHovering() {
    this.isHovering = true;
}
mouseLeaving() {
    this.isHovering = false;
}

}
