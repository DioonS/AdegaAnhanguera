import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { CardsService } from './cards.service';
import { DOCUMENT } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  cards: any[] | undefined;
  showButton: boolean = false;
  notEmptyCards = true;
  notScrolly = true;

  private scrollHeight = 900; // Define em pixels quando aparecerá o link para subir

  constructor(
    @Inject(DOCUMENT) private document: Document, // Injeção do document
    private cardsService: CardsService, // Injeção do cardService no component
    private spinner: NgxSpinnerService
    ) { } 

  ngOnInit() {
    this.cards = this.cardsService.getCards(); // Obtendo o metodo getCards da CardsService
    
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const yOffset = window.scrollY;
    const scrollTop = this.document.documentElement.scrollTop;
    this.showButton = (yOffset || scrollTop) > this.scrollHeight; // Define quando o link de subir a pagina aparecerá
  }

  onScrollTop(): void {
    this.document.documentElement.scrollTop = 0;
  }

  onScrollDown(): void {
    if (this.notScrolly && this.notEmptyCards) {
      this.spinner.show();
      this.notScrolly = false;
      this.loadNextCards();
    }
    //console.log("Down");
  }

  loadNextCards() {
    // Criar a logica para buscar os proximos cards
}


