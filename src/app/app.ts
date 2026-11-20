import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './_components/navbar/navbar';
import { CommonModule,  } from '../../node_modules/@angular/common/types/_common_module-chunk';

@Component({
  imports: [NavbarComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class AppComponent {
  protected readonly title = signal('gerador-certificado');
  exibeNavbar: boolean = true;
}
