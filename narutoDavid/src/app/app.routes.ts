import { Routes } from '@angular/router';
import { LandinpageComponent } from './pages/landinpage-component/landinpage-component';
import { LoginComponent } from './pages/login-component/login-component';
import { loginGuardGuard } from './guards/login-guard-guard';
import { NinjaListComponent } from './pages/ninja-list-component/ninja-list-component';
import { authGuardGuard } from './guards/auth-guard-guard';
import { Formulario } from './pages/formulario/formulario';
import { Page404 } from './pages/page404/page404';
import { NinjaViewComponent } from './pages/ninja-view-component/ninja-view-component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'landinPage'},
    { path: 'landinPage', component:LandinpageComponent},
    { path: 'login', component: LoginComponent, canActivate: [loginGuardGuard]},

    {
        path: 'home',
        component: NinjaListComponent,
        canActivate:[authGuardGuard]
    },
    {
        path: 'formulario',
        component: Formulario,
        canActivate: [authGuardGuard]
    },
    {
        path: 'formulario/:id',
        component: Formulario,
        canActivate: [authGuardGuard]
    },
    {
        path: 'heroe/:id',
        component: NinjaViewComponent,
        canActivate: [authGuardGuard]
    },


        { path: '**', component: Page404}
];
