import { Component, inject, computed, signal } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MunicipiService } from '../../../../core/services/municipi.service';

@Component({
  selector: 'app-unita-urbanistiche-list',
  imports: [RouterModule],
  templateUrl: './unita-urbanistiche-list.html',
  styleUrl: './unita-urbanistiche-list.css',
})
export class UnitaUrbanisticheListComponent {
  private municipiService = inject(MunicipiService);
  private route = inject(ActivatedRoute);

  id = Number(this.route.snapshot.paramMap.get('id'));
  nome = computed(() => this.municipiService.getCircoscrizioneById(this.id)?.nome);

  unitaUrbanistiche = computed(() => this.municipiService.getUnitaUrbanisticheByCircoscrizione(this.id));
}
