import { ProductoInterface } from '../../interfaces/producto-interface';
import { ServiceProductos } from './../../services/service-productos';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-tabla-component',
  imports: [],
  templateUrl: './tabla-component.html',
  styleUrl: './tabla-component.css',
})
export class TablaComponent {

  SProductos = inject(ServiceProductos);

  producto: ProductoInterface;

  arrayProductos: ProductoInterface[] = this.SProductos.getProductos();
  currency: string = this.SProductos.getCurrency();

  constructor() {
    this.producto = { SKU: '', title: '', price: 0 };
    this.arrayProductos = [];
  }
  ngOnInit(): void {
    this.arrayProductos = this.SProductos.getProductos();
    this.currency = this.SProductos.getCurrency();
  }
}
