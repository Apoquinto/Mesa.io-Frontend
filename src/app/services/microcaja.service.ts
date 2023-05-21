import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { map } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import categories from '../Interfaces/categories';
import option from '../Interfaces/options';
import orders from '../Interfaces/orders';
import rawOrders from '../Interfaces/rawOrders';
import { Observable } from 'rxjs';

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



//    getOrders(): Observable<orders[]>{
//     return this.get<rawOrders[]>('/orders').pipe(
//       map((rawOrders: rawOrders[]) => this.transformData(rawOrders))
//     )
//  };

getOrders(dateForm: NgForm): Observable<orders[]> {
  return this.post(
    '/orders/dates', {
      "startDate":dateForm.value.from,
      "endDate":dateForm.value.to
  }).pipe(
    map((rawOrders: any) => this.transformData(rawOrders))
  );
}



  transformData(rawOrders: rawOrders[]): orders[] {
    return rawOrders.map((data) => ({
      id: data.id,
      name: data.dishName,
      amount: data.amount,
      price: parseFloat (data.dish.price),
      totalPrice: Number(data.amount) * Number(data.dish.price),
      ids_categories: data.dish.idsCategories.map((id: string) => parseInt(id, 10)),
      date: data.datePurchase
    }));
  }
  




  getSales(dateForm: NgForm) {
    return this.post(
     `/orders/date`,  { 
      "startDate":dateForm.value.from,
      "endDate":dateForm.value.to
     }
    ).pipe(map((orders) => {}));
  }


}
