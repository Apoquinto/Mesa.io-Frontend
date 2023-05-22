import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

interface Link {
  label: string;
  icon: string;
  url: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnDestroy {
  isLoggedIn: boolean = false;
  userType: string = 'user';
  links: Link[] = [];
  private subscriptions: Subscription[] = [];

  constructor(private loginService: AuthService) {
    const linksData = {
      admin: [
        {
          label: 'Orders',
          icon: 'bx bxs-file',
          url: '/orders',
        },
        {
          label: 'Dishes',
          icon: 'bx bxs-dish',
          url: '/dishes',
        },
      ],
      user: [
        {
          label: 'Menu',
          icon: 'bx bxs-food-menu',
          url: '/menu',
        },
        {
          label: 'Dishes',
          icon: 'bx bxs-dish',
          url: '/dishes',
        },
        {
          label: 'Orders',
          icon: 'bx bxs-file',
          url: '/orders',
        },
      ],
    };
    this.subscriptions.push(
      this.loginService.isLoggedIn().subscribe((loggedIn) => {
        this.isLoggedIn = loggedIn;
      }),
      this.loginService.roleType().subscribe((role) => {
        this.userType = role;
        this.links = role === 'admin' ? linksData.admin : linksData.user;
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
