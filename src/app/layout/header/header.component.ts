import { Component } from '@angular/core';

@Component({
  selector: 'isd-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  title: string;

  constructor() {
    this.title = 'Learning Angular';
  }
}