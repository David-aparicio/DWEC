import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { Footer } from "./components/footer/footer";
import { ListCard } from "./pages/list-card/list-card";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, ListCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('simulacroExamen');
}
