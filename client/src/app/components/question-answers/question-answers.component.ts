import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteService } from '../../service/note/note.service';
import { Model } from '../../Models/model.model';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-question-answers',
  templateUrl: './question-answers.component.html',
  styleUrls: ['./question-answers.component.scss']
})
export class QuestionAnswersComponent implements OnInit {
  card = new Model();
  image;
  show
  cardId: any
  question: string = '';
  sub
  questions
  constructor(private routes: ActivatedRoute, public router: Router, public noteService: NoteService) { }

  ngOnInit() {
    this.sub = this.routes.params.subscribe(params => {
      this.cardId = params['cardId'];
    });
    this.noteService.getNoteDetails(this.cardId).subscribe(result => {
      this.card = result['data']['data'][0];
      console.log(this.card);
      console.log(this.card.questionAndAnswerNotes.length);
      this.show = result['data']['data'][0].questionAndAnswerNotes.length;
      if (this.show != 0) {
        this.questions = result['data']['data'][0].questionAndAnswerNotes[0].message;
      }
    })
    this.image=environment.profileUrl;
  }
  close() {
    this.router.navigate(['/home']);
  }
  addQuestion() {
    if (this.question != '') {
      console.log(this.question)
      this.show = !this.show;
      let body = {
        "message": this.question,
        "notesId": this.cardId
      }
      this.noteService.addQuestionAndAnswer(body).subscribe(result => {
        console.log(result);
      })
    }
  }
}
