import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HeroService } from '../../services/hero-service';
import { ILogin } from '../../interfaces/i-login';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private userLogin = inject(HeroService);
  private router = inject(Router);

  ngOnInit(): void {
    if(localStorage.getItem("token")){
      this.router.navigate(['/dashboard']);
    }
  }


  async getUser(loginForm: NgForm) {
    const loginUser: ILogin = loginForm.value as ILogin;
    
    try {
      let response = await this.userLogin.login(loginUser);
      if(response.token) {
        localStorage.setItem("token", response.token);

        this.router.navigate(['/dashboard']);
                loginForm.reset();
            }
      }catch (error) {
            alert("Credenciales incorrectos");
            loginForm.reset();
        }

    }
  }

