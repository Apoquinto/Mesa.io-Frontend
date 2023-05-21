import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnDestroy {
  isLoggedIn: boolean = false;
  userType: string = 'user';
  private subscriptions: Subscription[] = [];

  constructor(private loginService: AuthService) {
    this.subscriptions.push(
      this.loginService.isLoggedIn().subscribe((loggedIn) => {
        this.isLoggedIn = loggedIn;
      }),
      this.loginService.roleType().subscribe((role) => {
        this.userType = role;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  onLogOut() {
    this.loginService.logout();
  }
}
