import { Component, OnInit } from '@angular/core';
import { CardsService, Product } from '../cards/cards.service';

@Component({
  selector: 'app-latas',
  templateUrl: './latas.component.html',
  styleUrls: ['./latas.component.css']
})
export class LatasComponent implements OnInit {

  beerCards: Product[] = [];

  constructor(private cardsService: CardsService) { }

  ngOnInit(): void {
    this.cardsService.getCardsByCategory('lata-cerveja-269ml').subscribe(cards => {
      this.beerCards = cards;
    });
  }

}
