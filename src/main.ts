import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { SamsungappComponent } from './samsungapp/samsungapp.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule,SamsungappComponent],
  template: `
  <app-samsungapp></app-samsungapp>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
