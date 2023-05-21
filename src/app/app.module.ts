import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManagerMenu } from './components/managermenu/managermenu.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { HomeclientComponent } from './pages/homeclient/homeclient.component';
import { MenuclientComponent } from './pages/menuclient/menuclient.component';
import { ComponentFooterComponent } from './layouts/footerclient/footerclient.component';
import { LoginclientComponent } from './components/loginclient/loginclient.component';
import { SignupclientComponent } from './components/signupclient/signupclient.component';
import { ReservationclientComponent } from './pages/reservationclient/reservationclient.component';
import { ReservationclientCreateComponent } from './pages/reservationclient-create/reservationclient-create.component';
import { ReservationclientConfirmComponent } from './pages/reservationclient-confirm/reservationclient-confirm.component';
import { MenuclientlistComponent } from './pages/menuclientlist/menuclientlist.component';
import { AdminnavComponent } from './layouts/adminnav/adminnav.component';
import { MicrocajaComponent } from './pages/microcaja/microcaja.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ShopComponent } from './components/shop/shop.component';



@NgModule({
  declarations: [
    AppComponent,
    ManagerMenu,
    NavbarComponent,
    HomeclientComponent,
    MenuclientComponent,
    ComponentFooterComponent,
    LoginclientComponent,
    SignupclientComponent,
    ReservationclientComponent,
    ReservationclientCreateComponent,
    ReservationclientConfirmComponent,
    MenuclientlistComponent,
    AdminnavComponent,
    MicrocajaComponent,
    ShopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
