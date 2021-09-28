import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { TestData } from '../data/testData';
import { Category } from '../model/Category';
import { Task } from '../model/Task';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {
  taskSubject = new BehaviorSubject<Task[]>(TestData.tasks);
  categoriesSubject = new BehaviorSubject<Category[]>(TestData.categories)
  constructor() { }
  getCategories(): Category[]{
    return TestData.categories;
  }

  // fillTasks(){
  //   this.taskSubject.next(TestData.tasks)
    
  // }

  fillTasksByCategory(category: Category){
    const tasks = TestData.tasks.filter(task => task.category === category);
    this.taskSubject.next(tasks);
  }
}
