import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { BehaviorSubject, Observable, catchError, map, of } from 'rxjs';
import * as bcrypt from 'bcrypt';
import AcessToken from '../Interfaces/token';

// TODO: Replace mockup interface with real interface
interface Credentials {
  username: string;
  password: string;
}

interface SignCredentials {
  username: string;
  email: string;
  password: string;
}

enum Roles {
  Admin,
  Visitor,
}

@Injectable({
  providedIn: 'root',
})
export class AuthService extends HttpService {
  private tokenKey = 'access_token';
  private isLogged = new BehaviorSubject<boolean>(false);

  constructor() {
    super();
  }

  login(credentials: Credentials) {
    return this.post<AcessToken>('/auth/signIn', {
      username: credentials.username,
      password: credentials.password,
    }).pipe(
      map((token: any) => {
        localStorage.setItem('email', token.email);
        sessionStorage.setItem(this.tokenKey, token.access_token);
        this.isLogged.next(true);
        localStorage.setItem('role', token.role);
        return of(true); // Indicar éxito de inicio de sesión si es necesario
      }),
      catchError((error) => {
        return of(false); // Devolver un Observable con valor false para indicar que el inicio de sesión falló
      })
    );
  }

  signUp(credentials: SignCredentials) {
    this.post('/auth/signUp', {
      password: credentials.password,
      email: credentials.email,
      username: credentials.username,
    }).subscribe(
      (user) => {
        console.log(user);
        alert('Regristro Exitoso');
      },
      (err) => {
        alert('Upps... Intenta mas tarde');
      }
    );
  }

  logout() {
    sessionStorage.removeItem(this.tokenKey);
    localStorage.removeItem('email');
    localStorage.setItem('role', 'user');
    this.isLogged.next(false);
  }

  isLoggedIn(): Observable<boolean> {
    return this.isLogged.asObservable();
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }
}
