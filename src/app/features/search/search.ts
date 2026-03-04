import { Component, inject, computed } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../core/services/data.service';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

import type { SearchResult } from '../../core/models/data.model';

@Component({
  selector: 'app-search',
  imports: [ReactiveFormsModule],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {
  private DataService = inject(DataService);
  private router = inject(Router);

  // creazione di un FormControl per la barra di ricerca
  searchControl = new FormControl('');

  private query = toSignal(
    this.searchControl.valueChanges.pipe(
        // aspetta 300 ms prima di effettuare nuova ricerca
        debounceTime(300),
        // evita di aggiornare la query se il valore non cambia
        distinctUntilChanged(),
      ),
      { initialValue: '' }
      );

  results = computed(() => this.DataService.searchUnitaUrbanistiche(this.query() ?? ''));

  navigateTo(result: SearchResult): void {
    this.router.navigate(['/circoscrizione', result.circoscrizionePadreId]);
  }
}
