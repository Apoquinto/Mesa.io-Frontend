import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import categories from 'src/app/Interfaces/categories';
import Dish from 'src/app/Interfaces/dish';
import option from 'src/app/Interfaces/options';
import { MenulistService } from 'src/app/services/menulist.service';
import { MicrocajaService } from 'src/app/services/microcaja.service';

@Component({
  selector: 'app-cruddishes',
  templateUrl: './cruddishes.component.html',
  styleUrls: ['./cruddishes.component.css'],
})
export class CRUDdishesComponent {
  dishes!: Dish[];
  categories!: option[];

  constructor(
    private menuService: MenulistService,
    private router: Router,
    private microService: MicrocajaService
  ) {
    this.menuService.getDishes().pipe(
      map((value) => {
        console.log(value);
        this.dishes = value.items;
      })
    );

    this.microService.getCategories().subscribe((catergories) => {
      this.categories = catergories;
    });
  }
  redirectToPage() {
    // Realizar el redireccionamiento a otra página utilizando el enrutador de Angular
    // Por ejemplo:
    this.router.navigate(['/createDish']);
  }
}
