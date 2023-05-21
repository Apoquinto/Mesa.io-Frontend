import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class EmailerService extends HttpService {
  constructor() {
    super();
  }

  sendEmail() {
    this.post('/email', {
      email: localStorage.getItem('email'),
    });
  }
}
