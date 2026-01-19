import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { LandinPage } from './pages/landin-page/landin-page';
import { authguardGuard } from './guards/authguard-guard';
import { Dashboard } from './pages/dashboard/dashboard';
import { HeroList } from './pages/hero-list/hero-list';
import { HeroForm } from './pages/hero-form/hero-form';

export const routes: Routes = [
     { path: '', pathMatch: 'full', redirectTo: 'landinpage'},
     { path: 'landinpage', component: LandinPage},
     { path: 'login', component: Login},
     {
        path: '',
        canActivate: [authguardGuard],
        children: [
            { path: 'dashboard', component: Dashboard},
            {path: 'herolist', component: HeroList},
            {path: 'formulario', component: HeroForm}
        ]
     }
];
