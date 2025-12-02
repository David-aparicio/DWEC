import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  imports: [],
  templateUrl: './filter.html',
  styleUrl: './filter.css',
})
export class Filter {
    @Output() filtroSeleccionado = new EventEmitter<string>();
   // @Output() filtroPrecio = new EventEmitter<{ min: number, max: number }>();


  aplicarFiltro(filtro: string) {
    this.filtroSeleccionado.emit(filtro); 
  }

  

}
