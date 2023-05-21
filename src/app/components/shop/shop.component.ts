import { Component } from '@angular/core';
import Products from 'src/app/Interfaces/products';
import { EmailerService } from 'src/app/services/emailer.service';

import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
})
export class ShopComponent {
  constructor(
    private shopService: ShopService,
    private emailService: EmailerService
  ) {
    this.calculateTotal();
  }
  totalForBuy!: number;

  calculateTotal() {
    this.totalForBuy = this.shopService
      .getProducts()
      .reduce(
        (accumulator, current) =>
          accumulator + current.price * current.quantity,
        0
      );
  }

  onReduce(product: Products) {
    let toMod = this.shopService.getProducts().find((toBuy) => {
      return toBuy.name === product.name;
    });

    toMod!.quantity = toMod!.quantity - 1;
    if (toMod!.quantity <= 0) this.shopService.deleteProduct(toMod!.name);

    this.calculateTotal();
  }

  toPay() {
    this.shopService.payProducts();
    this.emailService.sendEmail();
    this.calculateTotal();
  }

  getToBuy() {
    return this.shopService.getProducts();
  }
}
