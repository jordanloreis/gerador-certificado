import { Component, OnInit } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class NavbarComponent implements OnInit {
  ngOnInit(): void {
    this.mensagem();
  }

  mensagem(): void {
    console.log('Meu componente navbar inicializou');
  }
}
