import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signupclient',
  templateUrl: './signupclient.component.html',
  template: `<form id="form-register">
    <input name="username" type="text" required />
    <input name="email" type="email" required />
    <input id="form-password" type="password" name="password" required />
    <input type="password" name="confirmPassword" required />
  </form>`,
})
export class SignupclientComponent {
  password: string = '';
  confirmPassword: string = '';
  username: string = '';
  email: string = '';

  constructor(private loginService: AuthService) {}

  onSubmit() {
    console.log(this.password, this.confirmPassword);
    if (this.password !== this.confirmPassword) {
      alert('no coinciden las claves');
      return;
    }

    this.loginService.signUp({
      username: this.username,
      password: this.password,
      email: this.email,
    });
  }
}
