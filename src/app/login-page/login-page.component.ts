import { Component,NgModule  } from '@angular/core';
import { Router } from '@angular/router';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-login-page',
    standalone: true,
    templateUrl: './login-page.component.html',
    styleUrl: './login-page.component.css',
    imports: [NavBarComponent,FormsModule,CommonModule]
})
export class LoginPageComponent {
  constructor(private router:Router){}
  username: string = 'abc@gmail.com';
  password: string = 'abc@123';
  showError: boolean = false;
  errorMessage: string = '';
// onSubmit(){
//    this.router.navigate(['/dashboard']);
// }
onLogin(): void {
  this.showError = false;
  this.errorMessage = '';

  try {
    if (this.username=='abc@gmail.com', this.password=='abc@123') {
      this.router.navigate(['/dashboard']);
    } else  {
      throw new Error('Login failed. Please check your credentials.');
    }
  } catch (error) {
    if (error instanceof Error) {
      this.showError = true;
      this.errorMessage = error.message;
    } else {
      this.showError = true;
      this.errorMessage = 'An unknown error occurred.';
    }
  }
}

}
