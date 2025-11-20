import { Component, inject, Input} from '@angular/core';
import { ServiceProductos } from '../../services/service-productos';
import { ProductoInterface } from '../../interfaces/producto-interface';

@Component({
  selector: 'app-card-component',
  imports: [],
  templateUrl: './card-component.html',
  styleUrl: './card-component.css',
})
export class CardComponent {

  sCarrito = inject(ServiceProductos);
  moneda!: string;
  cantidad: number ;
  
  @Input() producto!: ProductoInterface;

  constructor() {
    this.cantidad = 0;
  }

  ngOnInit() {
    this.moneda = this.sCarrito.getCurrency();
  }
}
