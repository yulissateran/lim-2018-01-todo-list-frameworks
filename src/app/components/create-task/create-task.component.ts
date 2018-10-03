import { Component, OnInit } from '@angular/core';

import { CrudTasksService } from '../../services/crud-tasks-firebase/crud-tasks.service'

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  
  public description: string;
  constructor(
    public _CrudTasksService: CrudTasksService
  ) { }
  createTask() {
    if(this.description){
      this.description = this.description.trim();
      if (this.description) {
        this._CrudTasksService
          .createTaskDb(this.description)
          .then(() => {
            this.description = '';
          });
      }
    } 
  }
  createTaskKeypress(event) {
    // console.log('hola')
    if (event.keyCode === 13) {
      console.log('hola')
      this.createTask()
    }
  }
  ngOnInit() {
  }
}
