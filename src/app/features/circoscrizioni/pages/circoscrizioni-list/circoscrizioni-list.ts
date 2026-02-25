import { Component, inject, computed, signal } from '@angular/core';
import { MunicipiService } from '../../../../core/services/municipi.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-circoscrizioni-list',
  imports: [RouterModule],
  templateUrl: './circoscrizioni-list.html',
  styleUrl: './circoscrizioni-list.css',
})
export class CircoscrizioniListComponent {
  private municipiService = inject(MunicipiService);
  // iniezione del servizio ActivatedRoute per accedere ai parametri della route
  private route = inject(ActivatedRoute);

  // andiamo a leggere il parametro 'id' dalla route e lo convertiamo in numero
  id = Number(this.route.snapshot.paramMap.get('id'));
  // creiamo un computed che restituisce il nome del municipio corrispondente all'id letto dalla route
  // un computed è una funzione che dipende da uno o più signal 
  // e si aggiorna automaticamente quando uno di questi signal cambia
  nome = computed(() => this.municipiService.getMunicipioById(this.id)?.nome);

  // utilizziamo il servizio MunicipiService per ottenere le circoscrizioni
  // del municipio corrispondente all'id letto dalla route
  circoscrizioni = computed(() => this.municipiService.getCircoscrizioniByMunicipio(this.id));
}
