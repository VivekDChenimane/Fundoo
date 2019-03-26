import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-label-list',
  templateUrl: './label-list.component.html',
  styleUrls: ['./label-list.component.scss']
})
export class LabelListComponent implements OnInit {

  constructor() { }
@Input() ArrayOfLabel;
  ngOnInit() {
  }
  openLabelNotes(array){
    
  }
}
