import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TaskModel } from 'src/model/task.model';
import { ApiTaskService } from './api.task.service';

@Injectable({
  providedIn: 'root',
})
export class StateTsksService {
  private tasks$: BehaviorSubject<TaskModel[]>;

  constructor(private api: ApiTaskService) {
    this.tasks$ = new BehaviorSubject([] as TaskModel[]);
  }

  getTasks() {
    return this.tasks$.asObservable();
  }

  loadTasks() {
    this.api.getAll().subscribe((data) => {
      this.tasks$.next(data);
      //console.log(this.tasks);
    });
  }
}
