import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { map } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import categories from '../Interfaces/categories';
import option from '../Interfaces/options';
import orders from '../Interfaces/orders';

@Injectable({
  providedIn: 'root',
})
export class MicrocajaService extends HttpService {
  getCategories() {
    return this.get<categories[]>('/categories', {}).pipe(
      map((categories) => {
        let options: option[] = [];

        for (let categorie of categories) {
          options.push({ label: categorie.name, value: categorie.id });
        }

        return options;
      })
    );
  }

  getSales(dateForm: NgForm) {
    return this.get<orders[]>(
      `/orders?from=${dateForm.value.from}&to=${dateForm.value.to}`
    ).pipe(map((orders) => {}));
  }
}
