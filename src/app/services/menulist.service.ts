import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { map } from 'rxjs/operators';
import Dish from '../Interfaces/dish';

@Injectable({
  providedIn: 'root',
})
export class MenulistService extends HttpService {
  category!: number;

  constructor() {
    super();
  }

  setCategory(category: number) {
    this.category = category;
  }

  getDishes() {
    return this.get<Dish[]>('/dishes').pipe(
      map((dishes) => {
        return dishes;
      })
    );
  }
}
