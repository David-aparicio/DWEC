import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import {LoginService } from '../../services/login.service';
import { Iuser } from '../../interfaces/iuser';

@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  private loginService = inject(LoginService);
  private router = inject(Router);


  ngOnInit(): void {
    if (localStorage.getItem('accessToken')){
      this.router.navigate(['/dashboard']);
    }
  }


async getUser(loginForm: NgForm) {
        const loginUser: Iuser = loginForm.value as Iuser;
        loginUser.expiresInMins = 30;

        //Hay que hacer la petición de login
        try {
            let response = await this.loginService.login(loginUser);
            console.log(response);
            if (response.accessToken && response.refreshToken) {
                localStorage.setItem("accessToken", response.accessToken);
                localStorage.setItem("refreshToken", response.refreshToken);

                 // ⭐ SIMULAR ROLES SEGÚN EL USERNAME
            const userRole = this.determinarRol(loginUser.username);
            localStorage.setItem("userRole", userRole);
        
              // Guardar info del usuario (opcional pero útil)
              localStorage.setItem("username", response.username || loginUser.username);
              localStorage.setItem("userId", response.id || '1');

                this.router.navigate(['/dashboard']);
                loginForm.reset();
            }

        } catch (error) {
            alert("Credenciales incorrectos");
            loginForm.reset();
        }

    }
    // ⭐ MÉTODO PARA DETERMINAR EL ROL
  private determinarRol(username: string): string {
    // Define qué usuarios son admins
    const admins = ['emilys', 'admin', 'administrator'];
    
    if (admins.includes(username.toLowerCase())) {
      return 'admin';
    }
    return 'user';
  }

}
