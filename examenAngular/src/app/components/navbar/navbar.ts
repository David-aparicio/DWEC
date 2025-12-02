import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../services/api-service';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, FormsModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  
  servicio = inject(ApiService);
  selectedRole: string = 'User';
  
  authService = inject(AuthService);


cambiarRol(): void{
  this.authService.setRole(this.selectedRole as 'User' | 'Admin');
}
}
