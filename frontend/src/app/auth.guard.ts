import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  console.log("AuthGuard: Checking if user is logged in"); // Mensaje de depuración

  if (authService.isLoggedIn()) {
    return true;
} else {
    router.navigate(['/login']);
    return false;
}

};

