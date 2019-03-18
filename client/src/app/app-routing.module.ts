/**
 * importing all the routing module
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { HomeComponent } from './components/home/home.component'
import { NotesComponent } from './components/notes/notes.component'
import { NoteDialogComponent } from './components/note-dialog/note-dialog.component'
import { ArchiveComponent } from './components/archive/archive.component';
import { TrashComponent } from './components/trash/trash.component';
import { GuardGuard } from '../guard/guard.guard';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  {path: '',redirectTo: 'login',pathMatch: 'full'},
  {path: 'login',component: LoginComponent},
  {path: 'registration',component: RegisterComponent},
  {path: 'forgot',component: ForgotPasswordComponent},
  {path: '',component: HomeComponent,canActivate:[GuardGuard],children:[
      {path:'home',component:NotesComponent},
      {path:'archive',component:ArchiveComponent},
      {path:'trash',component:TrashComponent},
      {path:'search',component:SearchComponent}
    ] 
  },
  {
      path:'update-note',
      component:NoteDialogComponent
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
