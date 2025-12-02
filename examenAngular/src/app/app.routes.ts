import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home-component/home-component';
import { FormularioComponent } from './pages/formulario-component/formulario-component';
import { ListCard } from './pages/list-card/list-card';
import { ProductoView } from './pages/producto-view/producto-view';

export const routes: Routes = [

    { path: '', pathMatch: 'full', redirectTo: 'home'},
    { path: 'home', component: HomeComponent},
    { path: 'formulario', component: FormularioComponent},
    { path: 'formulario/:id', component: FormularioComponent},
    { path: 'productos', component: ListCard},
    { path: 'productos/:id', component: ProductoView},
    { path: '**', redirectTo: 'home' }
];
