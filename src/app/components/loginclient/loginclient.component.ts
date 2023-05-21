import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-loginclient',
  templateUrl: './loginclient.component.html',
  template: `<form id="form-login">
    <input name="username" type="email" id="login-email" value="" />
    <input type="password" name="password" id="login-password" />
  </form>`,
})
export class LoginclientComponent {
  username: string = '';
  password: string = '';
  constructor(private loginService: AuthService) {}

  onSubmit() {
    this.loginService.login({
      username: this.username,
      password: this.password,
    });
  }
}
