import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home-component/home-component';
import { FormularioComponent } from './pages/formulario-component/formulario-component';
import { ListCard } from './pages/list-card/list-card';
import { ProductoView } from './pages/producto-view/producto-view';

export const routes: Routes = [
    // Ruta raíz redirige a home
    { path: '', pathMatch: 'full', redirectTo: 'home'},
    
    // Ruta para la página principal
    { path: 'home', component: HomeComponent},
    
    // Ruta para crear un nuevo producto (sin ID)
    { path: 'formulario', component: FormularioComponent},
    
    // Ruta para editar un producto existente (con ID)
    { path: 'formulario/:id', component: FormularioComponent},
    
    // Ruta para listar todos los productos
    { path: 'productos', component: ListCard},
    
    // Ruta para ver el detalle de un producto específico
    { path: 'productos/:id', component: ProductoView},
    
    // Cualquier ruta no definida redirige a home
    { path: '**', redirectTo: 'home' }
];
