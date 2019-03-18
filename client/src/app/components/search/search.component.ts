import { Component, OnInit,Input,PipeTransform } from '@angular/core';
import { NoteService } from '../../service/note/note.service';
import { DataService } from '../../service/data/data.service';
import { takeUntil } from  'rxjs/operators';
import { Subject } from 'rxjs';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  // search: any;
  cardData=[];
  destroy: Subject<boolean> = new Subject<boolean>(); 
  constructor(private noteService:NoteService,private dataService:DataService) { }
  ngOnInit() { 
    // this.dataService.currentMessage.subscribe(message=>{this.search=message});
    this.getAllCard();
  } 
  // transform(cards:this.cardData,) {}
   getAllCard() {
    //  console.log("search value"+this.search);
    this.noteService.getnotes().pipe(takeUntil(this.destroy))  
    .subscribe(data => {
        this.cardData = [];
        for (var i = data["data"]['data'].length - 1; i >= 0; i--) {
         
          this.cardData.push(data["data"]['data'][i])
        
      }
      console.log("Search cards",this.cardData)
      }, error => {
        console.log(error);
      })
  }
  ngOnDestroy() {
    // console.log(this.search);
    this.destroy.next(true);
    this.destroy.unsubscribe();
}
}
