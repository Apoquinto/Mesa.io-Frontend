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
    console.log(localStorage.getItem('email'));
    this.post('/email', {
      email: localStorage.getItem('email'),
    }).subscribe();
  }
}
