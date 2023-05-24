import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Dish from 'src/app/Interfaces/dish';
import Pagination from 'src/app/Interfaces/pagination';
import { MenulistService } from 'src/app/services/menulist.service';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-menuclientlist',
  templateUrl: './menuclientlist.component.html',
})
export class MenuclientlistComponent implements OnInit {
  dishesForShot!: Dish[];

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.menuService.getDishes().subscribe((pag: Pagination) => {
      this.dishesForShot = pag.items.filter((dish) => {
        return (
          dish.idsCategories.includes('[' + id!) ||
          dish.idsCategories.includes(id! + ']')
        );
      });
    });
  }

  constructor(
    private menuService: MenulistService,
    private shopService: ShopService,
    private route: ActivatedRoute
  ) {}

  onAdd(dish: Dish) {
    this.shopService.addProduct(dish);
  }
}
