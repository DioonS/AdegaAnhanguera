import { Component, OnInit } from '@angular/core';
import { CardsService } from './cards.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  cards: any[] | undefined;

  constructor(private cardsService: CardsService) { } // Injeção do cardService no component

  ngOnInit() {
    this.cards = this.cardsService.getCards(); // Obtendo o metodo getCards da CardsService
  }

}
