import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { BehaviorSubject, Observable, catchError, map, of } from 'rxjs';
import * as bcrypt from 'bcryptjs';
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
  private rounds = 5;
  private tokenKey = 'access_token';
  private isLogged = new BehaviorSubject<boolean>(false);
  private userRole = new BehaviorSubject<string>('user');

  constructor() {
    super();
  }

  login(credentials: Credentials) {
    return this.post<AcessToken>('/auth/signIn', {
      username: credentials.username,
      password: credentials.password,
    }).pipe(
      map((token) => {
        localStorage.setItem('email', token.email);
        sessionStorage.setItem(this.tokenKey, token.access_token);
        this.isLogged.next(true);
        this.userRole.next(token.role);
        return of(true); // Indicar éxito de inicio de sesión si es necesario
      }),
      catchError((error) => {
        return of(false); // Devolver un Observable con valor false para indicar que el inicio de sesión falló
      })
    );
  }

  signUp(credentials: SignCredentials) {
    bcrypt.hash(credentials.password, this.rounds, (err, hash) => {
      this.post('/auth/signUp', {
        password: hash,
        email: credentials.email,
        username: credentials.username,
      }).subscribe(
        (user) => {
          alert('Regristro Exitoso');
        },
        (err) => {
          alert('Upps... Intenta mas tarde');
        }
      );
    });
  }

  logout() {
    sessionStorage.removeItem(this.tokenKey);
    localStorage.removeItem('email');
    localStorage.removeItem('role');
    this.isLogged.next(false);
    this.userRole.next('user');
  }

  isLoggedIn(): Observable<boolean> {
    return this.isLogged.asObservable();
  }

  roleType(): Observable<string> {
    return this.userRole.asObservable();
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }
}
