import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { UserForm } from './pages/user-form/user-form';
import { UserList } from './pages/user-list/user-list';
import { UserView } from './pages/user-view/user-view';
import { Page404 } from './pages/page404/page404';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home'},
    { path: 'home', component: Home},
    { path: 'formulario', component: UserForm},
    {path: 'formulario/:id', component: UserForm},
    {path: 'usuarios', component: UserList},
    { path: 'usuarios/:id', component: UserView},
    
    { path: '**', component: Page404 },
    
    
];
