import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReservacionesComponent } from './components/reservaciones/reservaciones.component';


@NgModule({
  declarations: [
    AppComponent,
    ReservacionesComponent,
  ],
  imports: [
   BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
