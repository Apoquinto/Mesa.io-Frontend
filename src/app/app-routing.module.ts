import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeclientComponent } from './pages/homeclient/homeclient.component';
import { MenuclientComponent } from './pages/menuclient/menuclient.component';
import { ReservacionesComponent } from './components/reservaciones/reservaciones.component';
const routes: Routes = [
  { path: '', component: HomeclientComponent },
  { path: 'menu', component: MenuclientComponent },
  {path : 'reservaciones', component : ReservacionesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
