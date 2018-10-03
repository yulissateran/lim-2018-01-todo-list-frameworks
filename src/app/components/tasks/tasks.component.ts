import { Component, OnInit } from '@angular/core';
import { CrudTasksService } from '../../services/crud-tasks-firebase/crud-tasks.service'
// import * as firebase from 'firebase';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {
  public inEditing: boolean = false;
  public textUpdated: string;
  currentTask: any;
  tasks: any;
  ArrayTasks: any;
  constructor(
    public _CrudTasksService: CrudTasksService

  ) { 
      this._CrudTasksService.getTasksDb().subscribe(sda => {
        this.ArrayTasks = sda;
        this.tasks = sda;
   })
  }
  // public firebase = firebase;
  

  ngOnInit() {
  }
  markTaskDone(taskId) {
    this._CrudTasksService.markTaskDoneDb(taskId)
  }
  deleteTask(idTask) {
    this._CrudTasksService.deleteTaskDb(idTask)
  }

  updateTask(idTask, description) {
    this.currentTask = idTask;
    this.inEditing = true;
    this.textUpdated = description;
  }

  cancelEditTask() {
    this.inEditing = false;
    this.currentTask = 0;
  }

  saveEditTask(idTask) {
    if (this.textUpdated) {
      this.textUpdated = this.textUpdated.trim();
      if (this.textUpdated) {
        this._CrudTasksService.updateTaskDb(idTask, this.textUpdated)
          .then(() => {
            this.inEditing = false;
            this.currentTask = 0;
          });
      }
    }
  }
}
