import { Component } from '@angular/core';

@Component({
  selector: 'app-for-control',
  imports: [],
  templateUrl: './for-control.html',
  styleUrl: './for-control.css',
})
export class ForControl {

  estudiantes: any[];
  nElementos: number;

  constructor() {
    this.estudiantes = [
      { id: 1, name: "Frodo" , age: 23},
      { id: 2, name: "David" , age: 53},
      { id: 3, name: "Aitor", age: 99}    ];
    this.nElementos = this.estudiantes.length;
  }
  
      agregarEstudiante() : void{
        this.estudiantes.push({ id: 1 , name:"Alex", age: 33})
        this.nElementos = this.estudiantes.length;
    }
}