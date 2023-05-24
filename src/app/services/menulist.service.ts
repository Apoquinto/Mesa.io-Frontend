import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { map } from 'rxjs/operators';
import Dish from '../Interfaces/dish';
import Pagination from '../Interfaces/pagination';

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
    return this.get<Pagination>('/dishes/search?').pipe(
      map((pagination) => {
        console.log(pagination);
        return pagination;
      })
    );
  }
}
