import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar-component/navbar-component";
import { NoticiaComponent } from "./components/noticia-component/noticia-component";

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, NoticiaComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('BlogAngularD');
}
