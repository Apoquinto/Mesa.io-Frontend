import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Dish, { Ind_Dish } from 'src/app/Interfaces/dish';
import { MenulistService } from 'src/app/services/menulist.service';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-menuclientlist',
  templateUrl: './menuclientlist.component.html',
})
export class MenuclientlistComponent implements OnInit {
  dishesForShot!: Dish;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.menuService.getDishes().subscribe((dishes) => {
      this.dishesForShot.items = dishes.items.filter((dish) => {
        console.log(dish.idsCategories);
        return dish.idsCategories.includes(id!);
      });
      console.log(this.dishesForShot);
    });
  }

  constructor(
    private menuService: MenulistService,
    private shopService: ShopService,
    private route: ActivatedRoute
  ) {}

  onAdd(dish: Ind_Dish) {
    this.shopService.addProduct(dish);
  }
}
