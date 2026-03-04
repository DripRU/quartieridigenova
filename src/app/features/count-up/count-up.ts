import { Component, viewChild, ElementRef, input, effect } from '@angular/core';
import { CountUp } from 'countup.js';

@Component({
  selector: 'app-count-up',
  imports: [],
  templateUrl: './count-up.html',
  styleUrl: './count-up.css',
})
export class CountUpComponent {
  countUpElement = viewChild<ElementRef>('countUpElement');
  finalValue = input<number>();

  constructor() {
    effect(() => {
      const element = this.countUpElement();
      const options = {
        duration: 1,
        separator: '.',
        decimal: ',',
      };
      if (element && this.finalValue()) {
        const countUp = new CountUp(element.nativeElement, this.finalValue(), options);
        countUp.start();
      }
    });
  }
}
