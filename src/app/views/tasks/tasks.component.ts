import {Component, OnInit} from '@angular/core';
import {Task} from 'src/app/model/Task';
import {DataHandlerService} from 'src/app/service/data-handler.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[];

  constructor(private dataHandler: DataHandlerService) {
  }

  ngOnInit(): void {
    this.dataHandler.taskSubject.subscribe(tasks => {
      this.tasks = tasks;
      console.log(tasks);
    });
  }

  toggleTaskCompleted(task: Task): void {
    task.completed = !task.completed;
  }

}
