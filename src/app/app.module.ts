import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { FormsModule } from '@angular/forms';
import { AngularFireDatabaseModule } from '@angular/fire/database';
// import { AngularFireAuthModule } from '@angular/fire/auth';
import * as firebase from 'firebase';

import { AppComponent } from './app.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { environment } from '../environments/environment';
import { CrudTasksService } from './services/crud-tasks-firebase/crud-tasks.service';
import { TasksComponent } from './components/tasks/tasks.component';
firebase.initializeApp(environment.firebase);
@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    CreateTaskComponent,  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule

  ],
  providers: [CrudTasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
