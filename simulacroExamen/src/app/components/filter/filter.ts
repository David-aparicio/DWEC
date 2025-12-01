import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  imports: [FormsModule],
  templateUrl: './filter.html',
  styleUrl: './filter.css',
})
export class Filter {
  // Cuando el usuario pulse un botón, se enviará el filtro al padre
  @Output() filtroSeleccionado = new EventEmitter<string>();
   // @Output() filtroPrecio = new EventEmitter<{ min: number, max: number }>();


  aplicarFiltro(filtro: string) {
    this.filtroSeleccionado.emit(filtro); 
  }


}
