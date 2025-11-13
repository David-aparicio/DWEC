import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentBlog } from "./components/component-blog/component-blog";
import { NavBar } from "./components/nav-bar/nav-bar";

@Component({
  selector: 'app-root',
  imports: [ComponentBlog, NavBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('BlogAngular');

  darkMode = false;

  btnDarkMode() {
    this.darkMode = !this.darkMode;

    const body = document.body;
    if (this.darkMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }
}
