import { Component, inject } from '@angular/core';
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

  unitaUrbanistiche = this.municipiService.getUnitaUrbanisticheByCircoscrizione(this.id);
}
