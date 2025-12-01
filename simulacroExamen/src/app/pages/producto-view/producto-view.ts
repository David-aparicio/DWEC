import { Component, inject } from '@angular/core';
import { ApiInterface } from '../../interfaces/api-interface';
import { ApiService } from '../../services/api-service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-producto-view',
  imports: [RouterModule],
  templateUrl: './producto-view.html',
  styleUrl: './producto-view.css',
})
export class ProductoView {

  Iproducto !: ApiInterface;
  producto = inject(ApiService);
  activatedRoute = inject(ActivatedRoute);
  authService = inject(AuthService);



  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      let id: number = params.id;
      if (id != undefined) {
        let response = this.producto.getByID(id);
        if (response != undefined) {
          this.Iproducto = response;

        }
      }
    })
  }
}
