/******************************************************************************
 *
 *  Purpose         : this program is to display the icons in notes.
 *  @description    
 * 
 *  @file           : note-icons.component.ts
 *  @overview       : To display the dashboard.
 *  @module         : note-icons.ts - This is optional if expeclictly its an npm or local package
 *  @author         : Vivek D Chenimane <vivekdchenimane.com>
 *  @version        : 1.0
 *  @since          : 02-03-2019
 *
 ******************************************************************************/
/**
 * importing all thhe file from various module
 */
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { NoteService } from '../../service/note/note.service';
import { MatDialog } from '@angular/material';
import { CollaboratorDialogComponent } from '../collaborator-dialog/collaborator-dialog.component';
import { DataService } from '../../service/data/data.service'
import { Label } from '../../Models/model.model'
import { Router } from '@angular/router';

@Component({
  selector: 'app-note-icons',
  templateUrl: './note-icons.component.html',
  styleUrls: ['./note-icons.component.scss']
})
export class NoteIconsComponent implements OnInit {
  @Input() card: any
  @Output() removeEvent = new EventEmitter();
  @Output() addNoteEvent = new EventEmitter();
  @Input() show = true;
  labelList: Label
  addLabel: boolean = true;
  count: number = 0;
  model: any;
  colorArray =
    [[
      { 'color': '#B39DDB', 'name': 'purple' },
      { 'color': '#F48FB1', 'name': 'pink' },
      { 'color': '#FFAB40', 'name': 'brown' },
      { 'color': '#E0E0E0', 'name': 'gray' }
    ],
    [
      { 'color': '#FFFFFF', 'name': 'White' },
      { 'color': '#E53935', 'name': 'Red' },
      { 'color': '#EF6C00', 'name': 'Orange' },
      { 'color': '#FFEB3B', 'name': 'Yellow' }],
    [
      { 'color': '#B2FF59', 'name': 'green' },
      { 'color': '#69F0AE', 'name': 'teal' },
      { 'color': '#81D4FA', 'name': 'blue' },
      { 'color': '#0288D1', 'name': 'darkblue' }
    ]]
  constructor(private noteService: NoteService, private router: Router, public dialog: MatDialog, public dataService: DataService) { }

  ngOnInit() {
    this.dataService.currentLabels.subscribe(message => { this.labelList = message });

  }
  remove($needed) {
    this.removeEvent.emit($needed);
  }
  changeColor(color) {
    if (this.card.id == undefined) {
      this.card.color = color;
      return;
    }
    else {
      this.card.color = color;
      this.noteService.updateColor({
        "color": color,
        'noteIdList': [this.card.id]
      }).subscribe(data => {
        console.log(data, "data from update color")
      },
        err => {
          console.log(err, "err");
        })
    }
  }
  updateNote() {
    if (this.card.id == undefined) {
      this.addNoteEvent.emit();
      return;
    }
    else {
      this.remove(false);
    }
  }

  changeArchiveNote() {
    if (this.card.id == undefined) {
      this.card.isArchived = true;
      this.addNoteEvent.emit();
      return;
    }
    this.card.isArchived = !this.card.isArchived;
    this.model = {
      noteIdList: [this.card.id],
      isArchived: this.card.isArchived
    }
    console.log("in service");

    this.noteService.unarchiveNote(this.model).subscribe(message => {
      console.log("change archive done");
      console.log(message);
      this.remove(true);
    })
  }

  trashNote() {
    if (this.card.id == undefined) {
      console.log("can't delete creating note");
      return;
    }
    else {
      console.log("Card need to be deleted");
      this.noteService.trashNote({
        "isDeleted": true,
        "noteIdList": [this.card.id]
      }).subscribe(data => {
        this.remove(true);
      }, err => console.log(err))
    }
  }
  addCollaborator() {
    const dialogRef = this.dialog.open(CollaboratorDialogComponent, {
      width: 'auto',
      height: 'auto',
      data: {
        collaborators: this.card.collaborators,
        id: this.card.id
      }
    });
  }
  addLabelToggle() {
    console.log("sadfg")
    this.addLabel = !this.addLabel;
  }

  labelToNote(label) {
    console.log(label);
    console.log(this.card.noteLabels.indexOf(label));
    this.card.noteLabels.forEach(list => {
      if (list.id == label.id) {
        console.log("Already label exist");
        return;
      }
    }, this.service(label));
  }
  service(label) {
    this.card.noteLabels.push(label);
    if (this.card.id != undefined) {
      this.noteService.addLabelToNote(this.card.id, label.id, '').subscribe(message => {
        console.log(message);
      })
    }
    else
      this.card.labelIdList.push(label.id);
  }
  isSelected(id) {
    this.card.noteLabels.forEach(list => {
      if (list.id = id) {
        return true;
      }
    });
  }
  openQandA() {
    this.router.navigate(['question&Answers', this.card.id]);
  }
}
