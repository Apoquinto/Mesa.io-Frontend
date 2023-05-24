import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class DishesService extends HttpService {
  constructor() {
    super();
  }

  createDish(form: FormData) {
    this.post('/dishes', form).subscribe((dish) => {
      console.log(dish);
    });
  }
}
