import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {} from './_components/navbar/navbar';

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class AppComponent {
  protected readonly title = signal('gerador-certificado');
}
