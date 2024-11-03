import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = ''; // Almacena el nombre de usuario
  password: string = ''; // Almacena la contraseña
  errorMessage: string = ''; // Mensaje de error en caso de fallo
  successMessage: string = ''; // Mensaje de éxito en caso de registro exitoso

  constructor(private authService: AuthService, private router: Router) {}

  // Método de registro
  onRegister(): void {
    this.authService.register(this.username, this.password).subscribe(
      (response) => {
        this.successMessage = 'Registro exitoso. Redirigiendo al login...';
        setTimeout(() => {
          this.router.navigate(['/login']); // Redirige a la pantalla de login después de 2 segundos
        }, 2000);
      },
      (error) => {
        this.errorMessage = 'Error al registrar el usuario';
      }
    );
  }
}
