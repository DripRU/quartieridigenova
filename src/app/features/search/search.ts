import { Component, signal, inject, computed } from '@angular/core';
import type { SearchResult } from '../../core/models/municipio.model';
import { Router } from '@angular/router';
import { MunicipiService } from '../../core/services/municipi.service';

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {
  private municipiService = inject(MunicipiService)
  private router = inject(Router)

  private query = signal('')
  results = computed(() => this.municipiService.searchUnitaUrbanistiche(this.query()))

  navigateTo(result: SearchResult): void {
    this.router.navigate(['/circoscrizione', result.circoscrizionePadreId]);
  }

  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.query.set(input.value);
  }
}
