import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { BehaviorSubject, Observable } from 'rxjs';

// TODO: Replace mockup interface with real interface
interface Credentials {
  username: string,
  password: string
}

enum Roles {
  Admin,
  Visitor
}

@Injectable({
  providedIn: 'root'
})
export class AuthService extends HttpService {
  private tokenKey = 'access_token';
  // TODO: Replace mockup with enviroments values
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor() { 
    super();
  }

  // TODO: Replace mockup with real implementation
  login(credentials: Credentials) {
    localStorage.setItem(this.tokenKey, 'This is a dummy token')
    this.loggedIn.next(true);
  }

  logout() {
    if(this.loggedIn.value) {
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
