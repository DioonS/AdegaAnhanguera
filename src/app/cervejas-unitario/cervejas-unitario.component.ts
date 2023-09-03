import { Component } from '@angular/core';
import { CardsService } from '../cards/cards.service';

@Component({
  selector: 'app-cervejas-unitario',
  templateUrl: './cervejas-unitario.component.html',
  styleUrls: ['./cervejas-unitario.component.css']
})
export class CervejasUnitarioComponent {

  cervejas: any[] | undefined;

  constructor(private cardsService: CardsService) {
    //this.cervejas = this.cardsService.getCards().filter(card => card.category === 'cervejas_unitario');
  }

}
