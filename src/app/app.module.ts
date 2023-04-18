import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeclientComponent } from './pages/homeclient/homeclient.component';
import { MenuclientComponent } from './pages/menuclient/menuclient.component';
import { BannermenuComponent } from './components/bannermenu/bannermenu.component';
import { ReservacionesComponent } from './components/reservaciones/reservaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    ReservacionesComponent,
    AppComponent,
    NavbarComponent,
    HomeclientComponent,
    MenuclientComponent,
    BannermenuComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
