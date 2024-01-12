import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

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
