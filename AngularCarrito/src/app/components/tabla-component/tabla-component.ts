import { FormsModule } from '@angular/forms';
import { ProductoInterface } from '../../interfaces/producto-interface';
import { ServiceProductos } from './../../services/service-productos';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-tabla-component',
  imports: [FormsModule],
  templateUrl: './tabla-component.html',
  styleUrl: './tabla-component.css',
})
export class TablaComponent {


  SProductos = inject(ServiceProductos);

  producto: ProductoInterface;


constructor() {
    this.producto = { SKU: '', title: '', price: 0 };
    this.arrayProductos = [];
  }






        sumarCantidad(producto : ProductoInterface) {
          if (producto.cantidad !== undefined) {
            producto.cantidad += 1;
          } else {
            producto.cantidad = 1;
          }
        }
        restarCantidad(producto: ProductoInterface) {
          if (producto.cantidad !== undefined && producto.cantidad > 1) {
            producto.cantidad -= 1;
          }
        }





  

  arrayProductos: ProductoInterface[] = this.SProductos.getProductos();
  currency: string = this.SProductos.getCurrency();


  ngOnInit(): void {
    setTimeout(() => {
    this.arrayProductos = this.SProductos.getProductos();
    this.currency = this.SProductos.getCurrency();
  }, 1000);
}
}
