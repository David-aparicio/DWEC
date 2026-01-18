import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Iproducto } from '../../interfaces/iproducto';

@Component({
  selector: 'app-card-product',
  imports: [RouterLink],
  templateUrl: './card-product.html',
  styleUrl: './card-product.css',
})
export class CardProduct {
deleteP(arg0: Iproducto) {
throw new Error('Method not implemented.');
}
@Input() producto!: Iproducto;
}
