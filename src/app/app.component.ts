import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router'; 
import {MatTabsModule} from '@angular/material/tabs';
import { LoginComponent } from "./components/login/login.component"; 
import { RegisterComponent } from './components/register/register.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [
        CommonModule,
        RouterOutlet,
        MatTabsModule,
        LoginComponent,
        RegisterComponent
    ]
})
export class AppComponent {
  title = 'football-rent-web';
  label = {
    Login: 'Entrar',
    Register: 'Cadastrar'
  }
}
