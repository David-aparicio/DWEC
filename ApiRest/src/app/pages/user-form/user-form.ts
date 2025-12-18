import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario-service';

@Component({
  selector: 'app-user-form',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './user-form.html',
  styleUrl: './user-form.css',
})
export class UserForm {
  // userForm: FormGroup;
  // Suser = inject(UsuarioService);
  // ActivatedRoute = inject(ActivatedRoute);
  // router = inject(Router);
  // isNew: boolean;
  // const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // constructor() {
  //   this.isNew = true;
  //   this.userForm = this.createForm();
  // }

  // // private createForm(): FormGroup {
  // //   return new FormGroup({
  // //     _id: new FormControl(null),
  // //     id: new FormControl(null),
  // //     first_name: new FormControl('', [Validators.required, Validators.minLength(3)]),
  // //     last_name: new FormControl('', [Validators.required, Validators.minLength(3)]),
  // //     username: new FormControl('', [Validators.required]),
  // //     email: 
      
  // //   });
  // // }
}
