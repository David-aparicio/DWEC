import { Component, inject } from '@angular/core';
import { ApiInterface } from '../../interfaces/api-interface';
import { ApiService } from '../../services/api-service';
import { CardComponent } from "../../components/card-component/card-component";

@Component({
  selector: 'app-list-card',
  imports: [CardComponent],
  templateUrl: './list-card.html',
  styleUrl: './list-card.css',
})
export class ListCard {

  arrProductos: ApiInterface [];
  
  Sproductos = inject (ApiService);

  constructor() {
    this.arrProductos = [];
  }
  
  ngOnInit(): void{
    this.arrProductos = this.Sproductos.getProductos();
  }
}
