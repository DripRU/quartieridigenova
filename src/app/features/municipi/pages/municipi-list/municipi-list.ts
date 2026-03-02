import { Component, inject, computed } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MunicipiService } from '../../../../core/services/municipi.service';
import { FormatNumberPipe } from '../../../../core/pipes/format-number-pipe';
import { Search } from '../../../search/search';
import { ChartComponent } from '../../../chart/chart';

@Component({
  selector: 'app-municipi-list',
  standalone: true,
  imports: [RouterModule, FormatNumberPipe, Search, ChartComponent],
  templateUrl: './municipi-list.html',
  styleUrl: './municipi-list.css',
})
export class MunicipiListComponent {
  // constructor(private municipiService: MunicipiService) {}
  // municipi$: Observable<Municipio[]> = this.municipiService.getMunicipi();

  // iniezione del servizio MunicipiService usando inject() invece del costruttore
  private municipiService = inject(MunicipiService);

  // definiamo municipi come una signal che contiene un array di Municipio, inizialmente vuoto
  municipi = this.municipiService.getMunicipi();

  chartData = computed(() =>
    this.municipi().map((municipio) => ({
      nome: municipio.nome,
      popolazione: municipio.popolazione,
    })),
  );
}
