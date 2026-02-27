import { Component, inject, computed, effect } from '@angular/core';
import { MunicipiService } from '../../../../core/services/municipi.service';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { FormatNumberPipe } from '../../../../core/pipes/format-number-pipe';

@Component({
  selector: 'app-circoscrizioni-list',
  imports: [RouterModule, FormatNumberPipe],
  templateUrl: './circoscrizioni-list.html',
  styleUrl: './circoscrizioni-list.css',
})
export class CircoscrizioniListComponent {
  private municipiService = inject(MunicipiService);
  // iniezione del servizio ActivatedRoute per accedere ai parametri della route
  private route = inject(ActivatedRoute);

  private router = inject(Router);

  // andiamo a leggere il parametro 'id' dalla route e lo convertiamo in numero
  id = Number(this.route.snapshot.paramMap.get('id'));

  municipio = this.municipiService.getMunicipioById(this.id);

  constructor() {
    // effect è una funzione di Angular che accetta una funzione e la esegue
    // ogni volta che un signal al suo interno cambia
    effect(() => {
      if (
        // getMunicipi() restituisce un signal di tipo Municipio[]
        // la seconda () serve per accedere al valore del signal 
        // con .lenght > 0 controlliamo che l'array non sia vuoto 
        this.municipiService.getMunicipi()().length > 0 &&
        // cerca il municipio corrispondente all'id letto dalla route
        // se non lo trova restituisce undefined
        this.municipiService.getMunicipioById(this.id) == undefined
      ) {
        // se il municipio è undefined, naviga alla pagina di errore
        this.router.navigate(['/not-found']);
      }
    });
  }

  // creiamo un computed che restituisce il nome del municipio corrispondente all'id letto dalla route
  // un computed è una funzione che dipende da uno o più signal
  // e si aggiorna automaticamente quando uno di questi signal cambia
  nome = computed(() => this.municipiService.getMunicipioById(this.id)?.nome);

  // utilizziamo il servizio MunicipiService per ottenere le circoscrizioni
  // del municipio corrispondente all'id letto dalla route
  circoscrizioni = computed(() => this.municipiService.getCircoscrizioniByMunicipio(this.id));
}
