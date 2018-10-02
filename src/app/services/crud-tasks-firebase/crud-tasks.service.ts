import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class CrudTasksService {
  public task = {};
  constructor() { }
  createTaskDb(description) {
    return new Promise((resolve) => { 
       ;  
      firebase
        .database()
        .ref('tasks')
        .push()
        .set({  
          description,
          date: firebase.database.ServerValue.TIMESTAMP       
         });
        resolve(true);
      })
  }
  deleteTaskDb(id) {
    return new Promise((resolve, reject) => {
      let updates = {};
      updates['tasks/' + id] = null;
      firebase
        .database()
        .ref()
        .update(updates, (error) => {
          if (error) reject(error);
          else resolve('ok');
        });
    });
  }

  updateTaskDb(id, text) {
    return new Promise((resolve, reject) => {
      let updates = {};
      updates['tasks/'+id+'/description'] = text;
      firebase
        .database()
        .ref()
        .update(updates, (error) => {
          if(error) {
            reject(error);
          } else resolve('ok');
        });
    });
  }
  
  markTaskDoneDb(taskId) {
    let taskRef = firebase.database().ref('tasks/' + taskId);
    taskRef.transaction((task) => {
      if (task) {
        if (task.done) {
          task.done = null;
        } else {
          task.done = true;
        }
      }
      return task;
    });
  }
}
