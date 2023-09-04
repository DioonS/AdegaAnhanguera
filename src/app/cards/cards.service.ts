import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  private totalCards: any;

  getCards(page = 1, cardsPerPage = 10): Observable<object[]> {
    const startIndex = (page - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const cards = [
      { id: 1, image: 'https://www.varanda.com.br/media/catalog/product/cache/1/image/1200x/9df78eab33525d08d6e5fb8d27136e95/c/e/cerv-amstel-lt-269ml-7896045505319.jpg', description: '', product: 'Amstel', price: '3,50', contentType: 'Lata 269ml', category: 'cerveja_unitario' },
      { id: 2, image: 'https://mfresh.s3.amazonaws.com/uploads/product/sku/18506/image/4ef2722a-2939-4bd2-a99b-1355bfad0afb.png', description: '', product: 'Amstel', price: '9,00', contentType: 'Garrafa 600ml', category: 'cerveja_unitario' },
      { id: 3, image: 'https://cdn.b4c.inf.br/storage/acouguebg/1000/cerveja-amstel-puro-malte-lata-350-ml_1_1624110634.jpg', description: '', product: 'Amstel', price: '4,50', contentType: 'Lata 350ml', category: 'cerveja_unitario' },
      { id: 4, image: 'https://www.varanda.com.br/media/catalog/product/cache/1/image/1200x/9df78eab33525d08d6e5fb8d27136e95/c/e/cerv-amstel-lt-269ml-7896045505319.jpg', description: '', product: 'Amstel', price: '3,50', contentType: 'Lata 269ml', category: 'cerveja_unitario' },
      { id: 5, image: 'https://mfresh.s3.amazonaws.com/uploads/product/sku/18506/image/4ef2722a-2939-4bd2-a99b-1355bfad0afb.png', description: '', product: 'Amstel', price: '9,00', contentType: 'Garrafa 600ml', category: 'cerveja_unitario' },
      { id: 6, image: 'https://cdn.b4c.inf.br/storage/acouguebg/1000/cerveja-amstel-puro-malte-lata-350-ml_1_1624110634.jpg', description: '', product: 'Amstel', price: '4,50', contentType: 'Lata 350ml', category: 'cerveja_unitario' },
      { id: 7, image: 'https://www.varanda.com.br/media/catalog/product/cache/1/image/1200x/9df78eab33525d08d6e5fb8d27136e95/c/e/cerv-amstel-lt-269ml-7896045505319.jpg', description: '', product: 'Amstel', price: '3,50', contentType: 'Lata 269ml', category: 'cerveja_unitario' },
      { id: 8, image: 'https://mfresh.s3.amazonaws.com/uploads/product/sku/18506/image/4ef2722a-2939-4bd2-a99b-1355bfad0afb.png', description: '', product: 'Amstel', price: '9,00', contentType: 'Garrafa 600ml', category: 'cerveja_unitario' },
      { id: 9, image: 'https://cdn.b4c.inf.br/storage/acouguebg/1000/cerveja-amstel-puro-malte-lata-350-ml_1_1624110634.jpg', description: '', product: 'Amstel', price: '4,50', contentType: 'Lata 350ml', category: 'cerveja_unitario' },
      { id: 10, image: 'https://www.varanda.com.br/media/catalog/product/cache/1/image/1200x/9df78eab33525d08d6e5fb8d27136e95/c/e/cerv-amstel-lt-269ml-7896045505319.jpg', description: '', product: 'Amstel', price: '3,50', contentType: 'Lata 269ml', category: 'cerveja_unitario' },
      { id: 11, image: 'https://mfresh.s3.amazonaws.com/uploads/product/sku/18506/image/4ef2722a-2939-4bd2-a99b-1355bfad0afb.png', description: '', product: 'Amstel', price: '9,00', contentType: 'Garrafa 600ml', category: 'cerveja_unitario' },
      { id: 12, image: 'https://cdn.b4c.inf.br/storage/acouguebg/1000/cerveja-amstel-puro-malte-lata-350-ml_1_1624110634.jpg', description: '', product: 'Amstel', price: '4,50', contentType: 'Lata 350ml', category: 'cerveja_unitario' },
      { id: 13, image: 'https://www.varanda.com.br/media/catalog/product/cache/1/image/1200x/9df78eab33525d08d6e5fb8d27136e95/c/e/cerv-amstel-lt-269ml-7896045505319.jpg', description: '', product: 'Amstel', price: '3,50', contentType: 'Lata 269ml', category: 'cerveja_unitario' },
      { id: 14, image: 'https://mfresh.s3.amazonaws.com/uploads/product/sku/18506/image/4ef2722a-2939-4bd2-a99b-1355bfad0afb.png', description: '', product: 'Amstel', price: '9,00', contentType: 'Garrafa 600ml', category: 'cerveja_unitario' },
      { id: 15, image: 'https://cdn.b4c.inf.br/storage/acouguebg/1000/cerveja-amstel-puro-malte-lata-350-ml_1_1624110634.jpg', description: '', product: 'Amstel', price: '4,50', contentType: 'Lata 350ml', category: 'cerveja_unitario' },
      { id: 16, image: 'https://www.varanda.com.br/media/catalog/product/cache/1/image/1200x/9df78eab33525d08d6e5fb8d27136e95/c/e/cerv-amstel-lt-269ml-7896045505319.jpg', description: '', product: 'Amstel', price: '3,50', contentType: 'Lata 269ml', category: 'cerveja_unitario' },
      { id: 17, image: 'https://mfresh.s3.amazonaws.com/uploads/product/sku/18506/image/4ef2722a-2939-4bd2-a99b-1355bfad0afb.png', description: '', product: 'Amstel', price: '9,00', contentType: 'Garrafa 600ml', category: 'cerveja_unitario' },
      { id: 18, image: 'https://cdn.b4c.inf.br/storage/acouguebg/1000/cerveja-amstel-puro-malte-lata-350-ml_1_1624110634.jpg', description: '', product: 'Amstel', price: '4,50', contentType: 'Lata 350ml', category: 'cerveja_unitario' },
      { id: 19, image: 'https://www.varanda.com.br/media/catalog/product/cache/1/image/1200x/9df78eab33525d08d6e5fb8d27136e95/c/e/cerv-amstel-lt-269ml-7896045505319.jpg', description: '', product: 'Amstel', price: '3,50', contentType: 'Lata 269ml', category: 'cerveja_unitario' },
      { id: 20, image: 'https://mfresh.s3.amazonaws.com/uploads/product/sku/18506/image/4ef2722a-2939-4bd2-a99b-1355bfad0afb.png', description: '', product: 'Amstel', price: '9,00', contentType: 'Garrafa 600ml', category: 'cerveja_unitario' },
      { id: 21, image: 'https://cdn.b4c.inf.br/storage/acouguebg/1000/cerveja-amstel-puro-malte-lata-350-ml_1_1624110634.jpg', description: '', product: 'Amstel', price: '4,50', contentType: 'Lata 350ml', category: 'cerveja_unitario' }
    ];
    for(let i = startIndex; i < endIndex; i++){
      if(i < this.totalCards){
        cards.push(cards[i]);
      }
    }
    return of(cards).pipe(delay(500));
  }

  constructor() { }
}
