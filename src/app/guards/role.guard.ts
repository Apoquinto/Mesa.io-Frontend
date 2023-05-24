import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  role: string = 'user';

  canActivate(): boolean {
    if (localStorage.getItem('role') === 'admin') {
      this.router.navigate(['homeAdmin']);
      return false;
    }
    return true;
  }

  constructor(private authService: AuthService, private router: Router) {}
}
