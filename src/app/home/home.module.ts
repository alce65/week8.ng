import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { GreetingsComponent } from './greetings/greetings.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, GreetingsComponent],
  imports: [CommonModule, FormsModule, HomeRoutingModule],
})
export class HomeModule {}
