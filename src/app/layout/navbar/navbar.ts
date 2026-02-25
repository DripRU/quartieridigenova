import { Component, inject, signal } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { Location } from '@angular/common';


@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class NavbarComponent {
  private router = inject(Router);
  private location = inject(Location);

  // creiamo un signal booleano che indica se siamo nella home page o meno
  // di default lo impostiamo a true perché quando l'app viene caricata per la prima volta
  // siamo nella home page
  isHomePage = signal(true)

  constructor() {
    // prendiamo tutti gli eventi di navigazione emessi dal router di Angular
    // e filtriamo solo quelli che sono di tipo NavigationEnd
    // ovvero quelli che indicano che la navigazione è terminata e la nuova pagina è stata caricata
    // infine aggiorniamo il valore del signal isHomePage in base all'url della pagina corrente
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.isHomePage.set(event.url === '/');
    });
  }
  goBack(): void {
    this.location.back();
  }
}
