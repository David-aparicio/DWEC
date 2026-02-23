import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../../services/login-service';
import { Ilogin } from '../../interfaces/ilogin';

@Component({
  selector: 'app-login-component',
  imports: [RouterLink, FormsModule],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css',
})
export class LoginComponent {
  private ninjaLogin = inject(LoginService);
  private router = inject(Router);

  ngOnInit(): void{
    if(localStorage.getItem("token")){
      this.router.navigate(['/home']);
    }
  }

  async getNinja(loginForm: NgForm) {
    const loginUser: Ilogin = loginForm.value as Ilogin;

    try{
      let response = await this.ninjaLogin.login(loginUser);

      if (response.token) {
        localStorage.setItem("token", response.token);

        this.router.navigate(['/home']);
        loginForm.reset();
      } else {
        alert("No se recibio el token")
      }
    } catch (error) {
      console.error('errro Completo', error)
    }
  }
}
