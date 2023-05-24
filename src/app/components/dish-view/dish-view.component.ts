import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';
import option from 'src/app/Interfaces/options';
import Products from 'src/app/Interfaces/products';
import { DishesService } from 'src/app/services/dishes.service';
import { MicrocajaService } from 'src/app/services/microcaja.service';

@Component({
  selector: 'app-dish-view',
  templateUrl: './dish-view.component.html',
  styleUrls: ['./dish-view.component.css'],
  template: `<form>
    <input type="text" id="nombre" name="nombre" required />
    <textarea id="descripcion" name="descripcion" required></textarea>
    <input type="number" id="precio" name="precio" required />
    <select id="categorias" name="categorias"></select>
    <input type="file" id="imagen" name="imagen" />
    <button type="submit">Guardar</button>
  </form> `,
})
export class DishViewComponent {
  producto = {
    nombre: '',
    descripcion: '',
    precio: 0,
    categorias: '',
    imagen: null,
  };

  constructor(private micro: MicrocajaService, private dishes: DishesService) {
    this.micro.getCategories().subscribe((cat) => {
      console.log('cat', cat);
      this.options = cat;
    });
  }

  options!: option[];

  submitForm(form: NgForm) {
    const formData = new FormData();
    if (form.valid) {
      console.log(form.value.nombre, form.value.descripcion, form.value.precio);
      formData.append('name', form.value.nombre);
      formData.append('description', form.value.descripcion);
      formData.append('price', form.value.precio);
      formData.append('categories', form.value.categorias);
      formData.append('dish-preview', form.value.imagen);
    }
    console.log(formData);
    this.dishes.createDish(formData);
  }

  handleImageUpload(event: any) {
    // Aquí puedes manejar la carga de la imagen, por ejemplo, asignarla a la propiedad 'imagen' del objeto 'producto'
    const file = event.target.files[0];
    this.producto.imagen = file;
  }
}
