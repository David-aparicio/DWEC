import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TablaComponent } from "./components/tabla-component/tabla-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TablaComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AngularCarrito');
}
