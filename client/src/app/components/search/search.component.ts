import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() { }
  @Input() keyword
  ngOnInit() {
    // this.workers();
  }
  workers(){
    // console.log("sdfag");
    
  }
}
