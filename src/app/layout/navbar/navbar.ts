import { Component, computed, inject } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class NavbarComponent {
  private router = inject(Router);

  isHomePage = computed(() => this.router.url === '/' || this.router.url === '/home');

  goBack(): void {
    this.router.navigate(['/']);
  }
}
