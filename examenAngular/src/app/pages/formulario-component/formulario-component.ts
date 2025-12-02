import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ApiService } from '../../services/api-service';
import { ApiInterface } from '../../interfaces/api-interface';

@Component({
  selector: 'app-formulario-component',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './formulario-component.html',
  styleUrl: './formulario-component.css',
})
export class FormularioComponent {
  productoForm: FormGroup;
  productosServic = inject(ApiService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  isNew: boolean;
  categorias: string[] = ['niño', 'hombre', 'mujer'];

  constructor() {
    this.isNew = true;
    this.productoForm = this.createForm();
  }

  private createForm(): FormGroup {
    return new FormGroup({
      id_: new FormControl(null,[]),
      
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      
      description: new FormControl('', [Validators.required, Validators.maxLength(280)]),
      
      price: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(1000)]),

      category: new FormControl('', [Validators.required]),
      

      image: new FormControl('', [Validators.required]),
      

      active: new FormControl(true, [Validators.required])
    });
  }

  getDataForm() {
    if (this.productoForm.invalid) return;
    let producto = this.productoForm.value as ApiInterface;
    if (this.isNew) {
      producto.id_ = -1;
      this.productosServic.insertProdct(producto);
    } else {
      this.productosServic.actualizarProdct(producto);
    }
    this.productoForm.reset();
    this.router.navigate(['productos']);
  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params: any) => {

      let id: string = params.id;
      

      if (id != undefined) {

        let miProdct = this.productosServic.getByID(id);
        

        if (miProdct != undefined) {

          this.isNew = false;
          
          // Rellenamos el formulario con los datos del producto existente
          // patchValue permite actualizar solo los campos que coincidan
          this.productoForm.patchValue(miProdct);
        } else {

          alert("No se encuentra el producto en nuestro servicio");
          

          this.router.navigate(['productos']);
        }
      }
    });
  }


  checkControl(formControlName: string, validator: string): boolean | undefined {
    return this.productoForm.get(formControlName)?.hasError(validator) && this.productoForm.get(formControlName)?.touched;
  }
}







