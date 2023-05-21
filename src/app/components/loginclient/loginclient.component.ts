import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private loginService: AuthService, private router: Router) {}

  onSubmit() {
    this.loginService
      .login({
        username: this.username,
        password: this.password,
      })
      .subscribe((result) => {
        if (result) {
          this.router.navigate(['home']);
        }
      });
  }
}
