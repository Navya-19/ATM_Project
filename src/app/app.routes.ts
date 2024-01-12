import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { RestoreComponent } from './restore/restore.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

export const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path:  'dashboard',component: DashboardComponent} ,
  { path: 'withdraw',component: WithdrawComponent},
  { path: 'restore',component: RestoreComponent},
  { path: 'nav',component: NavBarComponent} ];

