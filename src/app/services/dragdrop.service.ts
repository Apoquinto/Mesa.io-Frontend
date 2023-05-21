import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class DragdropService extends HttpService {
  constructor() {
    super();
  }

  getSection() {
    return this.get('/sections').subscribe((val) => {
      console.log(val);
    });
  }
}
