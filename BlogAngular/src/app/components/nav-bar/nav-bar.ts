import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar {
  @Output() btnDarkModeEvent = new EventEmitter<void>();
  onbtnChange() {
    this.btnDarkModeEvent.emit();
  }
}
