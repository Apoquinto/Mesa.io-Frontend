import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeclientComponent } from './pages/homeclient/homeclient.component';
import { MenuclientComponent } from './pages/menuclient/menuclient.component';

const routes: Routes = [
  { path: '', component: HomeclientComponent },
  { path: 'menu', component: MenuclientComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
