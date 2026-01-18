import { Routes } from '@angular/router';
import { LandinPage } from './pages/landin-page/landin-page';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { loginGuardGuard } from './guards/login-guard-guard';
import { ProductList } from './pages/product-list/product-list';
import { UserList } from './pages/user-list/user-list';
import { Formulario } from './pages/formulario/formulario';
import { ProductInf } from './pages/product-inf/product-inf';
import { UserInf } from './pages/user-inf/user-inf';
import { adminGuardGuard } from './guards/admin-guard-guard';

export const routes: Routes = [
    { path: "", pathMatch: 'full', redirectTo: "home" },
    { path: "home", component: LandinPage },
    { path: "login", component: Login },
    
    // Dashboard con guard
    { 
        path: "dashboard", 
        component: Dashboard, 
        canActivate: [loginGuardGuard],
        children: [
            { path: "", redirectTo: "productos", pathMatch: 'full' },
            
            // Módulo productos
            {
                path: "productos",
                children: [
                    { path: "", component: ProductList },
                    { path: "formulario", component: Formulario },
                    { path: "formulario/:id", component: Formulario},
                    { path: ":id", component: ProductInf }
                ]
            },
            
            // Módulo empleados
            {
                path: "empleados",
                children: [
                    { path: "", component: UserList },
                    { path: ":id", component: UserInf }
                ]
            }
        ]
    },
    
    { path: "**", redirectTo: "home" }
];