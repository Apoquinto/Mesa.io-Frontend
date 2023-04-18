import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  /*
  show_componente_reser = true;
  show_componente_reserForm = false;
  show_componente_reserConfir = false;*/
  ngOnInit(): void {
   
  }
  title = 'mesa-io';

}
