import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManagerMenu } from './components/managermenu/managermenu.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeclientComponent } from './pages/homeclient/homeclient.component';
import { MenuclientComponent } from './pages/menuclient/menuclient.component';
import { BannermenuComponent } from './components/bannermenu/bannermenu.component';
import { ComponentFooterComponent } from './pages/component-footer/component-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ManagerMenu,
    NavbarComponent,
    HomeclientComponent,
    MenuclientComponent,
    BannermenuComponent,
    ComponentFooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
