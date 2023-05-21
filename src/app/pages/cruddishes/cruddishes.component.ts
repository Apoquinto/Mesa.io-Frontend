import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Dish from 'src/app/Interfaces/dish';
import { MenulistService } from 'src/app/services/menulist.service';
import { MicrocajaService } from 'src/app/services/microcaja.service';

@Component({
  selector: 'app-cruddishes',
  templateUrl: './cruddishes.component.html',
  styleUrls: ['./cruddishes.component.css'],
})
export class CRUDdishesComponent {
  dishes!: Dish[];

  constructor(private menuService: MenulistService, private route: Router) {
    menuService.getDishes().subscribe((dishes) => {
      this.dishes = dishes;
    });
  }
}
