// dashboard.component.ts
import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  private router = inject(Router);
  
  username: string = '';
  userRole: string = '';
  
  ngOnInit() {
    this.username = localStorage.getItem('username') || 'Usuario';
    this.userRole = localStorage.getItem('userRole') || 'user';
  }
  
  isAdmin(): boolean {
    return this.userRole === 'admin';
  }
  
  logout() {
    localStorage.clear(); // Limpia todo
    this.router.navigate(['/login']);
  }
}