import { Injectable } from '@angular/core';
import Products from '../Interfaces/products';
import Dish from '../Interfaces/dish';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class ShopService extends HttpService {
  buyCar: Products[];

  constructor() {
    super();
    this.buyCar = [];
  }

  addProduct(dish: Dish) {
    let toMod = this.buyCar.find((product) => {
      return product.name === dish.name;
    });

    if (toMod) {
      toMod.quantity = toMod.quantity + 1;
      console.log('adentro', this.buyCar);
      return;
    }
    this.buyCar.push({
      name: dish.name,
      id: dish.id,
      quantity: 1,
      price: dish.price,
    });
  }

  deleteProduct(name: String) {
    const filtered = this.buyCar.filter((toDelete) => toDelete.quantity !== 0);

    this.buyCar = filtered;
  }

  payProducts() {
    let emptyCar = this.buyCar.filter((dish) => {
      this.post('/orders', {
        userId: '1',
        dishId: dish.id,
        amount: dish.price,
      }).subscribe();
      return dish.name !== dish.name;
    });

    this.buyCar = emptyCar;
  }

  getProducts() {
    return this.buyCar;
  }
}
