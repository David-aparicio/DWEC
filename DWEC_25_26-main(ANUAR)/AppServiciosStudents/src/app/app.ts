import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentList } from "./components/student-list/student-list";

@Component({
    selector: 'app-root',
    imports: [StudentList],
    templateUrl: './app.html',
    styleUrl: './app.css'
})
export class App {
    protected readonly title = signal('AppServiciosStudents');
}
