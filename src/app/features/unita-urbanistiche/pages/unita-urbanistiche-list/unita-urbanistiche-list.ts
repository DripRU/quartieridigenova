import { Component, inject, computed, effect } from '@angular/core';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { DataService } from '../../../../core/services/data.service';
import { ChartComponent } from '../../../chart/chart';
import { CountUpComponent } from '../../../count-up/count-up';

@Component({
  selector: 'app-unita-urbanistiche-list',
  imports: [RouterModule, ChartComponent, CountUpComponent],
  templateUrl: './unita-urbanistiche-list.html',
  styleUrl: './unita-urbanistiche-list.css',
})
export class UnitaUrbanisticheListComponent {
  private DataService = inject(DataService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  id = Number(this.route.snapshot.paramMap.get('id'));

  circoscrizione = this.DataService.getCircoscrizioneById(this.id);

  constructor() {
    effect(() => {
      if (
        this.DataService.getMunicipi()().length > 0 &&
        this.DataService.getCircoscrizioneById(this.id) == undefined
      ) {
        this.router.navigate(['/not-found']);
      }
    });
  }

  nome = computed(() => this.DataService.getCircoscrizioneById(this.id)?.nome);

  unitaUrbanistiche = computed(() =>
    this.DataService.getUnitaUrbanisticheByCircoscrizione(this.id),
  );

  chartData = computed(() =>
    this.unitaUrbanistiche().map((unitaUrbanistica) => ({
      nome: unitaUrbanistica.nome,
      popolazione: unitaUrbanistica.popolazione,
    })),
  );
}
