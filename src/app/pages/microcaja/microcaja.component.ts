import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import orders from 'src/app/Interfaces/orders';
import { MicrocajaService } from 'src/app/services/microcaja.service';

@Component({
  selector: 'app-microcaja',
  templateUrl: './microcaja.component.html',
  template: `
    <form #dateForm="ngForm" (ngSubmit)="submitForm(dateForm)">
      <input type="date" name="from" />
      <input type="date" name="to" />
      <button type="submit">Enviar</button>
    </form>
  `,
})
export class MicrocajaComponent implements OnInit {
  ngOnInit(): void {
    this.cajaService.getCategories().subscribe(
      (categories) => {
        this.options = categories; // Maneja los datos recibidos
        console.log('Categorías:', categories);
      },
      (error) => {
        console.error('Error al obtener categorías:', error);
      }
    );
  }

  fromDate: string;
  toDate: string;
  options: any;
  orders: orders[];
  actualFilter: orders[];
  selectedOption: string = '';

  constructor(private cajaService: MicrocajaService) {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();

    this.orders = this.actualFilter = [
      {
        name: 'fajitas',
        id_category: 1,
      },
      {
        name: 'ñonga',
        id_category: 2,
      },
      {
        name: 'pate',
        id_category: 4,
      },
      {
        name: 'fajitas',
        id_category: 1,
      },
    ];

    this.fromDate = this.toDate = `${year}-${month}-${day}`;
  }
  submitForm(form: NgForm) {
    const from = new Date(form.value.from);
    const to = new Date(form.value.to);
    if (from > to) alert(`La fehca ${this.fromDate} es mayor a ${this.toDate}`);
    this.cajaService.getSales(form);
  }

  onCategoryChange() {
    this.actualFilter = this.orders.filter((order) => {
      return order.id_category === parseInt(this.selectedOption);
    });

    console.log(this.actualFilter);
  }
}
