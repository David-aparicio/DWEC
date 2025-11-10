import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentBlog } from "./components/component-blog/component-blog";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ComponentBlog],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('BlogAngular');
}
