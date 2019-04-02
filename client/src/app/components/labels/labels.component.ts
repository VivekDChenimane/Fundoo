import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.scss']
})
export class LabelsComponent implements OnInit {
@Input() labelNotes;
  constructor() { }

  ngOnInit() {
    console.log(this.labelNotes)
  }

}
