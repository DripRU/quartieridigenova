import { Component, input, viewChild, ElementRef, effect } from '@angular/core';
import { ChartElementData } from '../../core/models/data.model';
import { Chart, ArcElement, Tooltip, Legend, DoughnutController, Colors } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend, DoughnutController, Colors);

@Component({
  selector: 'app-chart',
  imports: [],
  templateUrl: './chart.html',
  styleUrl: './chart.css',
})
export class ChartComponent {
  elementData = input<ChartElementData[]>();
  canvas = viewChild<ElementRef>('popChart');

  private chartInstance: Chart | null = null;

  constructor() {
    effect(() => {
      const data = this.elementData();
      const ctx = this.canvas()?.nativeElement;

      // controllo per evitare che il chart venga generato se non ci sono dati
      if (!ctx || !data || data.length === 0) return;

      // se esiste già un chart lo distruggiamo
      if (this.chartInstance) {
        this.chartInstance.destroy();
      }

      new Chart(ctx, {
        type: 'doughnut',
        options: {
          responsive: true,
          maintainAspectRatio: true,
        },
        data: {
          labels: data.map((el) => el.nome),
          datasets: [{ data: data.map((el) => el.popolazione) }],
        },
      });
    });
  }
}
