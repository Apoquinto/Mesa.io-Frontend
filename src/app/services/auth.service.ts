import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { BehaviorSubject, Observable } from 'rxjs';
import * as bcrypt from 'bcryptjs';
import access_token from '../Interfaces/token';

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
  // TODO: Replace mockup with enviroments values
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor() {
    super();
  }

  // TODO: Replace mockup with real implementation
  login(credentials: Credentials) {
    this.post<access_token>('/auth/signIn', {
      username: credentials.username,
      password: credentials.password,
    }).subscribe((token) => {
      localStorage.setItem(this.tokenKey, token.access_token);
    });
  }

  signUp(credentials: SignCredentials) {
    bcrypt.hash(credentials.password, this.rounds, (err, hash) => {
      this.post('/auth/signUp', {
        password: hash,
        email: credentials.email,
        username: credentials.username,
      }).subscribe((user) => {
        console.log(user);
      });
    });
  }

  logout() {
    if (this.loggedIn.value) {
      localStorage.removeItem(this.tokenKey);
      this.loggedIn.next(false);
    }
  }

  isLoggedIn(): Observable<boolean> {
    return this.loggedIn;
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }
}
