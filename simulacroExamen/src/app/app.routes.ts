import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home-component/home-component';
import { FormularioComponent } from './pages/formulario-component/formulario-component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home'},
    { path: 'home', component: HomeComponent},
    { path: 'formulario', component: FormularioComponent}
];
