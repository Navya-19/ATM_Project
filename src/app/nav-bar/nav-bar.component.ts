import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import {MatListModule} from '@angular/material/list';
import { HeaderComponent } from "../header/header.component";
@Component({
    selector: 'app-nav-bar',
    standalone: true,
    templateUrl: './nav-bar.component.html',
    styleUrl: './nav-bar.component.css',
    imports: [MatSidenavModule, RouterOutlet, MatListModule, HeaderComponent]
})
export class NavBarComponent {
}
