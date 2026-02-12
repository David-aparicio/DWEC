import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../../services/login-service';
import { Ilogin } from '../../interfaces/ilogin';

@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  private heroLogin = inject(LoginService);
  private router = inject(Router);


  ngOnInit(): void{
    if(localStorage.getItem("token")){
      this.router.navigate(['/home']);
    }
  }

 async getHero(loginForm: NgForm) {
  const loginUser: Ilogin = loginForm.value as Ilogin;

  try {
    let response = await this.heroLogin.login(loginUser);
    console.log('Respuesta completa:', response);
    
    // Tu API devuelve solo { token: "..." }
    if (response.token) {
      localStorage.setItem("token", response.token);
      localStorage.setItem("username", loginUser.username);

      this.router.navigate(['/home']);
      loginForm.reset();
    } else {
      alert("Error: No se recibió el token");
    }

  } catch (error) {
    console.error('Error completo:', error);
    alert("Credenciales incorrectos");
    loginForm.reset();
  }
}

}
