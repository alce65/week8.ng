import { Component } from '@angular/core';

type MenuOptions = {
  path: string;
  label: string;
};

@Component({
  selector: 'isd-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  menuOptions: MenuOptions[];

  constructor() {
    this.menuOptions = [
      { path: '/home', label: 'Inicio' },
      { path: '/todo', label: 'Tareas' },
    ];
  }
}
