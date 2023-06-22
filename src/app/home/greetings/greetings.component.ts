import { Component } from '@angular/core';

@Component({
  selector: 'isd-greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.scss'],
})
export class GreetingsComponent {
  user: string;

  constructor() {
    this.user = 'Pepe';
  }

  handleDelete() {
    this.user = '';
  }
}
