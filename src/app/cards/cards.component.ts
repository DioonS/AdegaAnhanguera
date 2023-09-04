import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { CardsService } from './cards.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  cards: any[] = [];
  isLoading: boolean = false; // Inicia o carregamento com falso para ter itens na tela quando o usuario entrar
  currentPage: number = 1; // Define a página inicial
  cardsPerPage: number = 10; // Numero de cards que aparecerá por "pagina"
  showButton: boolean = false;
  notEmptyCards = true;
  notScrolly = true;

  private scrollHeight = 900; // Define em pixels quando aparecerá o link para subir

  toggleLoading = () => this.isLoading = !this.isLoading; // Alterna o estado de carregamento da pagina

  loadData = () => { // Função para carregar os dados do Service
    this.toggleLoading(); // Chama o metodo de alternancia
    this.cardsService.getCards(this.currentPage, this.cardsPerPage).subscribe({ // Faz chamada para a service e carrega os dados
      next:response => this.cards = response, // Atualiza a lista de cartões na interface com os dados
      error:err => this.toggleLoading() // Lida com os erros caso ocorram
    })
  }

  ngOnInit():void {
    this.loadData(); // Inicia a função loadData que por sua vez carrega todas as demais funções
  }

  appendData = () => {
    this.toggleLoading();
    this.cardsService.getCards(this.currentPage, this.cardsPerPage).subscribe({
      next:response => this.cards = [...this.cards, ...response], // Aguarda a resposta dos cards
      error:err => console.log(err), // Carrega erro no console caso de problema
      complete: () => this.toggleLoading() // Se bem sucedida ou não a função toggleLoading ainda é chamada
    })
  }

  onScroll = () => { // Função que adiciona mais itens conforme scroll
    this.currentPage++; // Adiciona mais "pagina"
    this.appendData(); // Carrega a função de mostrar os itens
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const yOffset = window.scrollY; // Captura o scroll
    const scrollTop = this.document.documentElement.scrollTop; // Carrega a função de subir ao topo
    this.showButton = (yOffset || scrollTop) > this.scrollHeight; // Define quando o link de subir a pagina aparecerá
  }

  onScrollTop(): void {
    this.document.documentElement.scrollTop = 0; // Move a pagina até o topo
  }

    constructor(@Inject(DOCUMENT) private document: Document, private cardsService: CardsService) {}
}
