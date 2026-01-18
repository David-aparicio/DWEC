import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landin-page',
  imports: [RouterLink],
  templateUrl: './landin-page.html',
  styleUrl: './landin-page.css',
})
export class LandinPage {
isToken : boolean;

constructor() {
  this.isToken = false;
}

ngOnInit(): void {
  if (localStorage.getItem('accessToken')){
    this.isToken = true;
  }
}
}
