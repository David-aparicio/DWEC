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

  // Declaración del formulario reactivo que gestionará todos los campos
  productoForm: FormGroup;
  
  // Inyección del servicio que gestiona las operaciones CRUD de productos
  productosServic = inject(ApiService);
  
  // Inyección de ActivatedRoute para leer los parámetros de la URL (por ejemplo, el ID del producto a editar)
  activatedRoute = inject(ActivatedRoute);
  
  // Inyección del Router para navegar entre rutas programáticamente
  router = inject(Router);

  // Flag que indica si estamos creando un nuevo producto (true) o editando uno existente (false)
  isNew: boolean;
  
  // Array con las categorías permitidas para el select
  categorias: string[] = ['niño', 'hombre', 'mujer'];

  constructor() {
    // Por defecto, asumimos que vamos a crear un producto nuevo
    this.isNew = true;
    
    // Inicializamos el formulario con su estructura y validaciones
    this.productoForm = this.createForm();
  }

  /**
   * Método privado que crea y retorna la estructura del formulario
   * Define todos los campos con sus validaciones correspondientes
   */
  private createForm(): FormGroup {
    return new FormGroup({
      // Campo ID: no tiene validaciones, se genera automáticamente
      id: new FormControl(null),
      
      // Campo Nombre: obligatorio y mínimo 3 caracteres
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      
      // Campo Descripción: obligatorio y máximo 280 caracteres
      description: new FormControl('', [Validators.required, Validators.maxLength(280)]),
      
      // Campo Precio: obligatorio, entre 0 y 1000
      price: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(1000)]),
      
      // Campo Categoría: obligatorio, debe ser una de las opciones del select
      category: new FormControl('', [Validators.required]),
      
      // Campo Imagen: obligatorio, debe ser una URL
      image: new FormControl('', [Validators.required]),
      
      // Campo Active: obligatorio, valor por defecto true (producto activo)
      active: new FormControl(true, [Validators.required])
    });
  }

  /**
   * Método que se ejecuta al hacer submit del formulario
   * Guarda o actualiza el producto según corresponda
   */
  getDataForm() {
    // Si el formulario no es válido, no hacemos nada y salimos del método
    if (this.productoForm.invalid) return;
    
    // Obtenemos los valores del formulario y los convertimos al tipo ApiInterface
    let producto = this.productoForm.value as ApiInterface;
    
    // Si es un producto nuevo
    if (this.isNew) {
      // Asignamos un ID temporal -1 (el backend le asignará el ID correcto)
      producto.id = -1;
      // Llamamos al método del servicio para insertar el nuevo producto
      this.productosServic.insertProdct(producto);
    } else {
      // Si estamos editando, llamamos al método para actualizar
      this.productosServic.actualizarProdct(producto);
    }
    
    // Limpiamos el formulario después de guardar
    this.productoForm.reset();
    
    // Navegamos de vuelta a la lista de productos
    this.router.navigate(['productos']);
  }

  /**
   * Método del ciclo de vida de Angular que se ejecuta al inicializar el componente
   * Aquí verificamos si estamos editando un producto existente
   */
  ngOnInit(): void {
    // Nos suscribimos a los cambios en los parámetros de la ruta
    this.activatedRoute.params.subscribe((params: any) => {
      // Extraemos el parámetro 'id' de la URL
      let id: number = params.id;
      
      // Si existe un ID en la URL (no es undefined)
      if (id != undefined) {
        // Buscamos el producto por su ID en el servicio
        let miProdct = this.productosServic.getByID(id);
        
        // Si encontramos el producto
        if (miProdct != undefined) {
          // Cambiamos el flag a false porque estamos editando
          this.isNew = false;
          
          // Rellenamos el formulario con los datos del producto existente
          // patchValue permite actualizar solo los campos que coincidan
          this.productoForm.patchValue(miProdct);
        } else {
          // Si no encontramos el producto, mostramos un alert
          alert("No se encuentra el producto en nuestro servicio");
          
          // Y redirigimos a la lista de productos
          this.router.navigate(['productos']);
        }
      }
    });
  }

  /*
    Método que verifica si un campo tiene un error específico
    y si el usuario ya ha interactuado con él (touched)
    @param formControlName - Nombre del campo a validar
    @param validator - Tipo de validación a comprobar (required, minlength, etc.)
    @returns true si el campo tiene el error Y ha sido tocado, false en caso contrario
   */
  checkControl(formControlName: string, validator: string): boolean | undefined {
    return this.productoForm.get(formControlName)?.hasError(validator) && 
           this.productoForm.get(formControlName)?.touched;
  }
}