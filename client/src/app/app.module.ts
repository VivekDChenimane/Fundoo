/**
 * @description importing required angular modules and componenets
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule} from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app-material.module';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { HomeComponent } from './components/home/home.component';
import { NoteIconsComponent } from './components/note-icons/note-icons.component';
import { AddNotesComponent } from './components/add-notes/add-notes.component';
import { DisplayNotesComponent } from './components/display-notes/display-notes.component';
import { NotesComponent } from './components/notes/notes.component';
import { RemindersComponent } from './components/reminders/reminders.component';
import { NoteDialogComponent } from './components/note-dialog/note-dialog.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { TrashComponent } from './components/trash/trash.component';
import { SearchComponent } from './components/search/search.component';
import { SearchPipe } from './pipe/search.pipe';
import { DeleteIconsComponent } from './components/delete-icons/delete-icons.component';
import { ReminderIconComponent } from './components/reminder-icon/reminder-icon.component';
import { LabelDialogComponent } from './components/label-dialog/label-dialog.component';
import { CollaboratorDialogComponent } from './components/collaborator-dialog/collaborator-dialog.component';
import { LabelsComponent } from './components/labels/labels.component';
import { CardComponent } from './components/card/card.component';
import { ImageDialogComponent } from './components/image-dialog/image-dialog.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { BarRatingModule } from "ngx-bar-rating";
import { QuestionAnswersComponent } from './components/question-answers/question-answers.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    HomeComponent,
    NoteIconsComponent,
    AddNotesComponent,
    DisplayNotesComponent,
    NotesComponent,
    RemindersComponent,
    NoteDialogComponent,
    ArchiveComponent,
    TrashComponent,
    SearchComponent,
    SearchPipe,
    DeleteIconsComponent,
    ReminderIconComponent,
    LabelDialogComponent,
    CollaboratorDialogComponent,
    LabelsComponent,
    CardComponent,
    ImageDialogComponent,
    QuestionAnswersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    HttpClientModule,
    BarRatingModule,
    ImageCropperModule,
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
