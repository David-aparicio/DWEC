import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  // Variable privada que almacena el rol actual
  private rolActual: 'User' | 'Admin' = 'User';
  
  /**
   * Obtiene el rol actual del usuario
   * @returns El rol actual ('User' o 'Admin')
   */
  getRol(): 'User' | 'Admin' {
    return this.rolActual;
  }
  
  /**
   * Establece un nuevo rol para el usuario
   * @param rol - El nuevo rol a establecer
   */
  setRol(rol: 'User' | 'Admin'): void {
    this.rolActual = rol;
    console.log('Rol actualizado a:', rol);
  }
  
  /**
   * Verifica si el usuario actual es administrador
   * @returns true si es Admin, false si es User
   */
  isAdmin(): boolean {
    return this.rolActual === 'Admin';
  }
  
  /**
   * Verifica si el usuario actual es usuario normal
   * @returns true si es User, false si es Admin
   */
  isUser(): boolean {
    return this.rolActual === 'User';
  }
}