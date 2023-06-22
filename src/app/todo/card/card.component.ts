import { Component, Input, EventEmitter, Output } from '@angular/core';
import { TaskModel } from 'src/model/task.model';

@Component({
  selector: 'isd-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() item!: TaskModel;
  @Output() deleting: EventEmitter<TaskModel>;

  constructor() {
    this.deleting = new EventEmitter();
  }

  handleClickDelete() {
    this.deleting.next(this.item);
  }
}
