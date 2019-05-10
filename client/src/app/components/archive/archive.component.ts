/******************************************************************************
 *
 *  Purpose         : this program is to display the note in dashboard.
 *  @description    
 * 
 *  @file           : archive.component.ts
 *  @overview       : To display the note which are archived.
 *  @module         : archive.ts - This is optional if expeclictly its an npm or local package
 *  @author         : Vivek D Chenimane <vivekdchenimane.com>
 *  @version        : 1.0
 *  @since          : 02-03-2019
 *
 ******************************************************************************/
/**
 * importing all the file from various module
 */
import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../service/note/note.service'

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  cardData: any
  constructor(private service: NoteService) { }

  ngOnInit() {
    this.getAllArchiveCard();

  }
  getAllArchiveCard() {
    this.service.archiveNotes().subscribe(data => {
      this.cardData = data["data"]["data"];
      console.log(data);
      return
    })
  }
}
