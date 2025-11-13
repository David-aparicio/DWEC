import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormTemplate } from "./component/form-template/form-template";

@Component({
  selector: 'app-root',
  imports: [FormTemplate],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('EjemploFormTemplate');
}
