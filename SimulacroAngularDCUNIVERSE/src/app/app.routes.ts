import { Routes } from '@angular/router';
import { LandinPage } from './pages/landin-page/landin-page';
import { Login } from './pages/login/login';
import { loginGuardGuard } from './guards/login-guard-guard';
import { authguardGuard } from './guards/authguard-guard';
import { HeroesList } from './pages/heroes-list/heroes-list';
import { Formulario } from './pages/formulario/formulario';
import { unsavedChangesGuard } from './guards/unsavedchanges-guard';
import { HeroesView } from './pages/heroes-view/heroes-view';
import { Page404 } from './pages/page404/page404';

export const routes: Routes = [
    // Rutas públicas (SIN guards)
    { path: '', pathMatch: 'full', redirectTo: 'landinPage'},
    { path: 'landinPage', component: LandinPage},
    { path: 'login', component: Login, canActivate: [loginGuardGuard]},
    
    // Rutas protegidas (CON authguard)
    { 
        path: 'home', 
        component: HeroesList,
        canActivate: [authguardGuard]
    },
    {
        path: 'formulario',
        component: Formulario,
        canActivate: [authguardGuard]
    },
    { 
        path: 'formulario/:id', 
        component: Formulario,
        canActivate: [authguardGuard]
    },
    {
        path: 'heroe/:id', 
        component: HeroesView,
        canActivate: [authguardGuard]
    },

    // 404 - Siempre al final
    { path: '**', component: Page404}
];