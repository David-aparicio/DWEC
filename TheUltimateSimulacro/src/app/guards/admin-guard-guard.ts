// guards/admin-guard.guard.ts
import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const adminGuardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  
  const userRole = localStorage.getItem('userRole');
  
  if (userRole === 'admin') {
    return true;
  }
  
  alert(' Acceso denegado: Esta sección requiere permisos de administrador');
  return router.createUrlTree(['/dashboard/productos']);
};