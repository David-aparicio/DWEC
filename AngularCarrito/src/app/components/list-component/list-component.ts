import { Component, inject } from '@angular/core';
import { ProductoInterface } from '../../interfaces/producto-interface';
import { ServiceProductos } from '../../services/service-productos';
import { FormsModule } from '@angular/forms';
import { CardComponent } from "../card-component/card-component";

@Component({
  selector: 'app-list-component',
  imports: [FormsModule, CardComponent],
  templateUrl: './list-component.html',
  styleUrl: './list-component.css',
})
export class ListComponent {
  
  producto : ProductoInterface;

  arrProductos: ProductoInterface[];
  
  Sproductos = inject(ServiceProductos);

  constructor() {
    this.producto = {sku: '', title: '', price: ''};
    this.arrProductos = [ ];
  }


  ngOnInit() {
    this.arrProductos = this.Sproductos.getProductos();
  }
}
