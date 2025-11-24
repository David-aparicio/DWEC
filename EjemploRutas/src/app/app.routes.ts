import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServiciosProfesionalesComponent } from './pages/servicios-profesionales/servicios-profesionales.component';
import { ContactComponent } from './pages/contact/contact.component';
import { Page404Component } from './pages/page404/page404.component';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'home'}, //Ruta vacia se carga home
    {path: 'home', component: HomeComponent},
    {path: 'servicios-profesionales', component: ServiciosProfesionalesComponent},
    {path: 'contacto', component: ContactComponent},
    //{path: '**', component: Page404Component}
    {path: '**', redirectTo:'home'} //Cuando pones ruta rara se carga home en este caso 
];
