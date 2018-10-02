import { Injectable } from '@angular/core';
// import * as firebase from 'firebase';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class CrudTasksService {
  public task = {};
  constructor(
    public DB: AngularFireDatabase
  ) { }
  createTaskDb(description) {


    // return new Promise((resolve) => { 
    //   firebase
    //     .database()
    //     .ref('tasks')
    //     .push()
    //     .set({  
    //       description,
    //       date: firebase.database.ServerValue.TIMESTAMP       
    //      });
    //     resolve(true);
    //   })
    const date = new Date().getTime();
    return new Promise((resolve) => {
      this.DB.database.ref('tasks/' + date)
        .set({
          description,
          id: date
        });
      resolve(true);
    });
  }
  getTasksDb() {
    return this.DB.list('tasks').valueChanges();
  }
  deleteTaskDb(id) {
    const itemRef = this.DB.object('tasks/' + id);
    itemRef.remove();
    // return new Promise((resolve, reject) => {
    //   let updates = {};
    //   updates['tasks/' + id] = null;
    //   firebase
    //     .database()
    //     .ref()
    //     .update(updates, (error) => {
    //       if (error) reject(error);
    //       else resolve('ok');
    //     });
    // });
  }

  updateTaskDb(id, text) {
    const itemRef = this.DB.object('tasks/' + id);
    return itemRef.update({ description : text });
    // return new Promise((resolve, reject) => {
    //   let updates = {};
    //   updates['tasks/'+id+'/description'] = text;
    //   firebase
    //     .database()
    //     .ref()
    //     .update(updates, (error) => {
    //       if(error) {
    //         reject(error);
    //       } else resolve('ok');
    //     });
    // });
  }
  
  markTaskDoneDb(id) {
  // const taskRef = this.DB.object('tasks/' + id);
  // return itemRef.update({ description : text });
  //   let taskRef = firebase.database().ref('tasks/' + taskId);
  // return this.DB.object('tasks/').snapshotChanges()
  // .subscribe(res=> console.log(res));
  // let newTask = {};
  // const taskRef = this.DB.object('tasks/' + id).valueChanges().subscribe(task => {
    let itemRef = this.DB.object('tasks/' + id).query.ref.transaction(newTask =>{
      if (newTask) {
        if (newTask.done) {
          newTask.done = null;
          console.log(newTask)
        } else {
          newTask.done = true;
          console.log(newTask)
        }
      }
      console.log(newTask)
      return newTask
    } 
    );
 
  // });
 
  
  }
}
