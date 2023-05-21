import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import orders from 'src/app/Interfaces/orders';
import { MicrocajaService } from 'src/app/services/microcaja.service';
import rawOrders from 'src/app/Interfaces/rawOrders';


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

   // this.getOrders();




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

     this.orders = this.actualFilter = []

    

    this.fromDate = this.toDate = `${year}-${month}-${day}`;
  }

  


  getOrders(form: NgForm) {
    this.cajaService.getOrders(form).subscribe(
      (orders: orders[]) => {
        this.orders = this.actualFilter = orders;
        console.log(orders)
      }
      ,
      (error) => {
        console.error('Error al obtener ordenes:', error);
      }
    );
  }

  submitForm(form: NgForm) {
    const from = new Date(form.value.from);
    const to = new Date(form.value.to);
    if (from > to) alert(`La fecha ${this.fromDate} es mayor a ${this.toDate}`);
    this.getOrders(form);

    
  }

  onCategoryChange() {

    if (this.selectedOption === ''){
      this.actualFilter= this.orders
    }else{
      this.actualFilter = this.orders.filter((orders) => {
        return orders.ids_categories.includes( parseInt(this.selectedOption))
      
      });
    }

  

    console.log(this.actualFilter);
  }

  printPDF(){
    
  }

  // getPdf(){
  //   this.cajaService.crearPDF(this.actualFilter);
  // }


}
