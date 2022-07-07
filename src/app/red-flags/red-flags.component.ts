import { Component, ElementRef, OnInit } from '@angular/core';
import { red, white } from '../utils/contants';

@Component({
  selector: 'app-red-flags',
  templateUrl: './red-flags.component.html',
  styleUrls: ['./red-flags.component.scss'],
})
export class RedFlagsComponent implements OnInit {
  card1 = this.pickRandom(white);
  card2 = this.pickRandom(white);
  card3 = this.pickRandom(red);

  constructor(private el: ElementRef) {}

  pickRandom(array: any[]): string {
    return array[Math.floor(Math.random() * array.length)];
  }

  shuffle(): void {
    this.card1 = this.pickRandom(white);
    this.card2 = this.pickRandom(white);
    this.card3 = this.pickRandom(red);

    const cards = this.el.nativeElement.querySelectorAll('.card-item');
    cards.forEach((card: any) => {
      // Reflown
      card.style.animation = 'none';
      card.offsetHeight;
      card.style.animation = null;
    });
  }

  ngOnInit(): void {}
}
