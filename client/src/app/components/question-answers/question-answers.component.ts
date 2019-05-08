import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteService } from '../../service/note/note.service';
import { Model } from '../../Models/model.model';
import { environment } from 'src/environments/environment';
import {Location} from '@angular/common';
@Component({
  selector: 'app-question-answers',
  templateUrl: './question-answers.component.html',
  styleUrls: ['./question-answers.component.scss']
})
export class QuestionAnswersComponent implements OnInit {
  card = new Model();
  private qID;
  replyShow:boolean=false;
  image;
  private open = true;
  show
  rate = 2
  cardId: any
  question: string = '';
  sub
  questions
  replyCount;
  private down = true;
  private rID;
  public editorContent: string ;
  qA;
  constructor(private _location: Location,private routes: ActivatedRoute, public router: Router, public noteService: NoteService) { }

  ngOnInit() {
    this.sub = this.routes.params.subscribe(params => {
      this.cardId = params['cardId'];
    });
    this.noteService.getNoteDetails(this.cardId).subscribe(result => {
      this.card = result['data']['data'][0];
      this.qA = result['data']['data'][0].questionAndAnswerNotes;
      console.log(this.card);
      console.log(this.card.questionAndAnswerNotes.length);
      this.show = result['data']['data'][0].questionAndAnswerNotes.length;
      if (this.show != 0) {
        this.questions = result['data']['data'][0].questionAndAnswerNotes[0];
      }
    })
    this.image = environment.profileUrl;
  }
  close() {
    // this.router.navigate(['/home']);
    this._location.back();
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
  viewReplies(questAns) {
    this.replyCount = 0;
    for (let i = 0; i < this.qA.length; i++) {
      if (questAns.id == this.qA[i].parentId) {
        this.replyCount++
      }
    }
    return this.replyCount;
  }
  rating(data, event) {

    let reqBody = {
      "rate": event
    }
    this.noteService.ratingQuestionAndAnswer(data.id, reqBody).subscribe(result => {
      // this.getNote();
      console.log("done", +result);
    })
  }
  averageRating(rateArray) {
    // this.value = 0;
    // if (rateArray.length != 0) {
    //   for (let i = 0; i < rateArray.length; i++) {
    //     this.value += rateArray[i].rate
    //   }
    //   this.avgRate = this.value / rateArray.length;
    //   return this.avgRate.toFixed(1);
    // }
  }
  checkRating(rateArray) {
    this.rate = 0;
    if (rateArray.length == 0) {
      return true;
    }
    for (let i = 0; i < rateArray.length; i++) {
      if (rateArray[i].userId == localStorage.getItem('userId')) {
        this.rate = rateArray[i].rate;
      }
    }
    return true;
  }
  replyTo() {
    let replyRequest = {
      "message": this.editorContent,
    }
    this.noteService.replyQuestionAndAnswer(this.qID, replyRequest).subscribe(response => {
      // this.getNote();
    })
  }
  replyDown(replyId) {
    this.down = !this.down;
    this.rID = replyId;
  }
  answer(id) {
    this.replyShow = !this.replyShow;
    this.qID = id;
  }
}
