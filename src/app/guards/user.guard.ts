import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(): boolean {
    const token = sessionStorage.getItem('access_token') !== null;
    console.log(token);

    if (!token) {
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}
