
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UsuarioService } from '../../services/usuario-service';
import { Iusuario } from '../../interfaces/iusuario';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './user-form.html',
  styleUrl: './user-form.css',
})
export class UserFormComponent {
  userForm: FormGroup;
  usuarioService = inject(UsuarioService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  isNew: boolean;

  // Expresión regular para validar formato de email
  emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  constructor() {
    this.isNew = true;
    this.userForm = this.createForm();
  }


  private createForm(): FormGroup {
    return new FormGroup({
      // Campo _id: MongoDB ID, no tiene validaciones, se genera automáticamente
      _id: new FormControl(null),

      // Campo id: ID numérico, no tiene validaciones
      id: new FormControl(null),

      // Campo Nombre: obligatorio y mínimo 3 caracteres
      first_name: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),

      // Campo Apellido: obligatorio y mínimo 3 caracteres
      last_name: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),

      // Campo Username: obligatorio y mínimo 3 caracteres
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),

      // Campo Email: obligatorio y debe cumplir patrón de email
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(this.emailRegex)
      ]),

      // Campo Imagen: obligatorio, debe ser una URL de imagen válida
      image: new FormControl('', [
        Validators.required
      ]),

      // Campo Password: obligatorio y mínimo 6 caracteres
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ])
    });
  }

  getDataForm() {
    // Validación del formulario
    if (this.userForm.invalid) return;

    let usuario = this.userForm.value as Iusuario;

    if (this.isNew) {
      // Modo Crear: asignamos id temporal
      usuario.id = -1;

      this.usuarioService.create(usuario).then(response => {
        alert('Usuario creado exitosamente');
        this.userForm.reset();
        this.router.navigate(['/usuarios']);
      }).catch(error => {
        console.error('Error al crear usuario:', error);
        alert('Error al crear el usuario');
      });
    } else {
      // Modo Editar: actualizamos el usuario existente
      this.usuarioService.update(usuario).then(response => {
        alert('Usuario actualizado exitosamente');
        this.userForm.reset();
        this.router.navigate(['/usuarios']);
      }).catch(error => {
        console.error('Error al actualizar usuario:', error);
        alert('Error al actualizar el usuario');
      });
    }
  }

  ngOnInit(): void {
    // Nos suscribimos a los cambios en los parámetros de la ruta
    this.activatedRoute.params.subscribe((params: any) => {
      // Extraemos el parámetro '_id' de la URL
      let _id: string = params._id;
      
      // Si existe un _id en la URL (no es undefined)
      if (_id != undefined) {
        // Buscamos el usuario por su _id en el servicio
        this.usuarioService.getByID(_id).then(usuario => {
          // Si encontramos el usuario
          if (usuario != undefined) {
            // Cambiamos el flag a false porque estamos editando
            this.isNew = false;
            
            // Rellenamos el formulario con los datos del usuario existente
            this.userForm.patchValue(usuario);
          } else {
            // Si no encontramos el usuario, mostramos un alert
            alert("No se encuentra el usuario en nuestro servicio");
            
            // Y redirigimos a la lista de usuarios
            this.router.navigate(['/usuarios']);
          }
        }).catch(error => {
          console.error('Error al cargar usuario:', error);
          alert("Error al cargar el usuario");
          this.router.navigate(['/usuarios']);
        });
      }
    });
  }

  checkControl(formControlName: string, validator: string): boolean | undefined {
    return this.userForm.get(formControlName)?.hasError(validator) &&
      this.userForm.get(formControlName)?.touched;
  }

  onCancel(): void {
    if (confirm('¿Estás seguro de que deseas cancelar? Los cambios no guardados se perderán.')) {
      this.router.navigate(['/usuarios']);
    }
  }

  onReset(): void {
    if (confirm('¿Estás seguro de que deseas resetear el formulario?')) {
      if (this.isNew) {
        this.userForm.reset();
      } else {
        const _id = this.activatedRoute.snapshot.params['_id']; // CORREGIDO: usar '_id'
        if (_id) {
          this.usuarioService.getByID(_id).then(usuario => {
            if (usuario) {
              this.userForm.patchValue(usuario);
            }
          });
        }
      }
    }
  }
}