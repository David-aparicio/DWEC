import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StudentsServices } from '../../services/students-services';
import { IStudent } from '../../interfaces/istudent';

@Component({
  selector: 'app-student-form',
  imports: [ReactiveFormsModule],
  templateUrl: './student-form.html',
  styleUrl: './student-form.css',
})
export class StudentForm {
    registerStudent: FormGroup;
    studentServices = inject(StudentsServices); //Injecto la dependencia del servicio

    constructor() {
        this.registerStudent = new FormGroup({
          nombre: new FormControl(null, [Validators.required]),
          edad: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(120)]),
          email: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]),
          curso: new FormControl(null, [Validators.required]),
          
        }, []);
    }


    getDataForm() {
        let student = this.registerStudent.value as IStudent;
        console.log(student);
        this.studentServices.addStudent(student);
        this.registerStudent.reset();
      }
}
