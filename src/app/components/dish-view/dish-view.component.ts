import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import option from 'src/app/Interfaces/options';
import Products from 'src/app/Interfaces/products';
import { MicrocajaService } from 'src/app/services/microcaja.service';

@Component({
  selector: 'app-dish-view',
  templateUrl: './dish-view.component.html',
  styleUrls: ['./dish-view.component.css'],
})
export class DishViewComponent {
  producto = {
    nombre: '',
    descripcion: '',
    precio: 0,
    categorias: '',
    imagen: null,
  };

  constructor(private micro: MicrocajaService) {}

  options!: option[];

  getCategires() {
    this.micro.getCategories().subscribe(
      (categories) => {
        this.options = categories; // Maneja los datos recibidos
      },
      (error) => {
        console.error('Error al obtener categorías:', error);
      }
    );
  }

  submitForm(form: NgForm) {
    if (form.valid) {
      const formData = new FormData();
      formData.append('nombre', form.value.nombre);
      formData.append('descripcion', form.value.descripcion);
      formData.append('precio', form.value.precio);
      formData.append('categorias', form.value.categorias);
      formData.append('imagen', form.value.imagen);
    }
  }

  handleImageUpload(event: any) {
    // Aquí puedes manejar la carga de la imagen, por ejemplo, asignarla a la propiedad 'imagen' del objeto 'producto'
    const file = event.target.files[0];
    this.producto.imagen = file;
  }
}
