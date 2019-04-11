import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { NoteService } from '../../service/note/note.service';
import { Model } from '../../Models/model.model';
@Component({
  selector: 'app-question-answers',
  templateUrl: './question-answers.component.html',
  styleUrls: ['./question-answers.component.scss']
})
export class QuestionAnswersComponent implements OnInit {
  card = new Model();
  show=true
  cardId: any
  question='asd'
sub
  constructor(private routes:ActivatedRoute,public router: Router,public noteService:NoteService) { }

  ngOnInit() {
    this.sub = this.routes.params.subscribe(params => {
      this.cardId = params['cardId'];
      });
      this.noteService.getNoteDetails(this.cardId).subscribe(result=>{
        this.card=result['data']['data'][0];
        console.log(this.card);
      })
    }
  close(){
    this.router.navigate(['/home']);

  }
  addQuestion(){
    this.show=!this.show;
  }
}
