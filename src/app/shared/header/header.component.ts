import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
//Componentes compartidos en toda la aplicación.

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
