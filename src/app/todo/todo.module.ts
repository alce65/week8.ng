import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { TasksComponent } from './tasks/tasks.component';
import { CardComponent } from './card/card.component';
import { AddComponent } from './add/add.component';


@NgModule({
  declarations: [
    TodoComponent,
    TasksComponent,
    CardComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule
  ]
})
export class TodoModule { }
