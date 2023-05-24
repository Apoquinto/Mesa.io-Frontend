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
  userType: string = localStorage.getItem('role')!;
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
          label: 'Log In',
          icon: 'bx bxs-log-in',
          url: '/login',
        },
        {
          label: 'Shop',
          icon: 'bx bxs-cart',
          url: '/shop',
        },
      ],
    };
    this.subscriptions.push(
      this.loginService.isLoggedIn().subscribe((loggedIn) => {
        this.isLoggedIn = loggedIn;
      })
    );

    this.links =
      localStorage.getItem('role') === 'admin'
        ? linksData.admin
        : linksData.user;

    console.log(this.links);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  onLogOut() {
    this.loginService.logout();
  }
}
