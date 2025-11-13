import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-template',
  imports: [FormsModule,],
  templateUrl: './form-template.html',
  styleUrl: './form-template.css',
})
export class FormTemplate {

  getDataForm(miFormulario: NgForm) {
    let trabajador = miFormulario.value;
    console.log(miFormulario.value);
    miFormulario.reset();
  }

}
