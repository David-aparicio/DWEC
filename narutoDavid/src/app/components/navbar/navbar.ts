import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  router = inject(Router);

   get isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
  
  logout() {
    const confirmed = confirm('¿Estás seguro que deseas cerrar sesión?');
    
    if (confirmed) {
      // Limpiar localStorage
      localStorage.removeItem('token');
      //localStorage.removeItem('username');
      
      // Redirigir al login
      this.router.navigate(['/landinPage']);
    }
  }
}
