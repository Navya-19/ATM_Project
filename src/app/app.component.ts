import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RestoreComponent } from './restore/restore.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { HeaderComponent } from "./header/header.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, DashboardComponent, LoginPageComponent, RestoreComponent, WithdrawComponent, NavBarComponent, HeaderComponent]
})
export class AppComponent{
  ones=10;
  totalOnes=this.ones*1;
  fives=10;
  totalFives=this.fives*5;
  tens=10;
  totalTens=this.tens*10;
  twentys=10;
  totalTwentys=this.twentys*20;
  fiftys=10;
  totalfiftys=this.fiftys*50;
  hundreds=10;
  totalHundreds=this.hundreds*100;
  totalSum=this.totalOnes+this.totalFives+this.totalTens+this.totalTwentys+this.totalfiftys+this.totalHundreds;
}
