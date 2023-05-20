import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeclientComponent } from './pages/homeclient/homeclient.component';
import { MenuclientComponent } from './pages/menuclient/menuclient.component';
import { LoginclientComponent } from './components/loginclient/loginclient.component';
import { SignupclientComponent } from './components/signupclient/signupclient.component';

const routes: Routes = [
  { path: '', component: HomeclientComponent },
  { path: 'menu', component: MenuclientComponent },
  { path: 'login', component: LoginclientComponent },
  { path: 'signup', component: SignupclientComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
