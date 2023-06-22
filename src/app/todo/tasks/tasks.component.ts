import { Component, OnInit } from '@angular/core';
import { ApiTaskService } from 'src/app/services/api.task.service';
import { StateTsksService } from 'src/app/services/state.tsks.service';
import { TaskModel } from 'src/model/task.model';

@Component({
  selector: 'isd-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  tasks!: TaskModel[];
  // constructor(private api: ApiTaskService) {
  constructor(private taskSrv: StateTsksService) {
    this.taskSrv.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  ngOnInit(): void {
    this.taskSrv.loadTasks();
  }

  handleDelete(task: TaskModel) {
    console.log('Papa Deleting', task.id);
  }
}
