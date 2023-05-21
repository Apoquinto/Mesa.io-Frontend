import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-loginclient',
  templateUrl: './loginclient.component.html',
})
export class LoginclientComponent {
  constructor(private loginService: AuthService) {}
}
