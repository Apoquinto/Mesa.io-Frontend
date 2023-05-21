import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeclientComponent } from './pages/homeclient/homeclient.component';
import { MenuclientComponent } from './pages/menuclient/menuclient.component';
import { LoginclientComponent } from './components/loginclient/loginclient.component';
import { SignupclientComponent } from './components/signupclient/signupclient.component';
import { MenuclientlistComponent } from './pages/menuclientlist/menuclientlist.component';
import { ShopComponent } from './components/shop/shop.component';
import { UserGuard } from './guards/user.guard';
import { MicrocajaComponent } from './pages/microcaja/microcaja.component';
import { RoleGuard } from './guards/role.guard';

const routes: Routes = [
  { path: 'home', component: HomeclientComponent, canActivate: [RoleGuard] },
  { path: 'menu', component: MenuclientComponent, canActivate: [RoleGuard] },
  { path: 'login', component: LoginclientComponent },
  { path: 'signup', component: SignupclientComponent },
  {
    path: 'menulist/:id',
    component: MenuclientlistComponent,
    canActivate: [RoleGuard],
  },
  {
    path: 'shop',
    component: ShopComponent,
    canActivate: [UserGuard, RoleGuard],
  },
  { path: 'homeAdmin', component: MicrocajaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
