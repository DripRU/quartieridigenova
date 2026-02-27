import { Component, inject, computed, effect } from '@angular/core';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { MunicipiService } from '../../../../core/services/municipi.service';
import { FormatNumberPipe } from '../../../../core/pipes/format-number-pipe';

@Component({
  selector: 'app-unita-urbanistiche-list',
  imports: [RouterModule, FormatNumberPipe],
  templateUrl: './unita-urbanistiche-list.html',
  styleUrl: './unita-urbanistiche-list.css',
})
export class UnitaUrbanisticheListComponent {
  private municipiService = inject(MunicipiService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  id = Number(this.route.snapshot.paramMap.get('id'));

  circoscrizione = this.municipiService.getCircoscrizioneById(this.id);

  constructor() {
    effect(() => {
      if (
        this.municipiService.getMunicipi()().length > 0 &&
        this.municipiService.getCircoscrizioneById(this.id) == undefined
      ) {
        this.router.navigate(['/not-found']);
      }
    });
  }

  nome = computed(() => this.municipiService.getCircoscrizioneById(this.id)?.nome);

  unitaUrbanistiche = computed(() =>
    this.municipiService.getUnitaUrbanisticheByCircoscrizione(this.id),
  );
}
