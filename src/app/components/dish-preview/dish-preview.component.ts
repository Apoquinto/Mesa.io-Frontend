import { Component, Input } from '@angular/core';
import { DishPreviewDTO } from 'src/app/dishes/dish-preview.dto';

@Component({
  selector: 'dish-preview',
  templateUrl: './dish-preview.component.html',
  styleUrls: ['./dish-preview.component.css'],
})
export class DishPreviewComponent {
  @Input() dish: DishPreviewDTO;

  constructor() {
    this.dish = {
      name: '',
      description: '',
      price: 0,
      dishThumbnailURL: '',
    };
  }
}
