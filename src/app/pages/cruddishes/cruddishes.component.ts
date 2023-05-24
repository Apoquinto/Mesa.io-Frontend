import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import Dish from 'src/app/Interfaces/dish';
import { MenulistService } from 'src/app/services/menulist.service';

@Component({
  selector: 'app-cruddishes',
  templateUrl: './cruddishes.component.html',
  styleUrls: ['./cruddishes.component.css'],
})
export class CRUDdishesComponent {
  dishes!: Dish[];

  constructor(private menuService: MenulistService, private router: Router) {
    this.menuService.getDishes().pipe(
      map((value) => {
        this.dishes = value;
      })
    );
  }
  redirectToPage() {
    // Realizar el redireccionamiento a otra página utilizando el enrutador de Angular
    // Por ejemplo:
    this.router.navigate(['/createDish']);
  }
}
