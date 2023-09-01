import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  getCards() {
    return [
      { id: 1, image: 'https://www.varanda.com.br/media/catalog/product/cache/1/image/1200x/9df78eab33525d08d6e5fb8d27136e95/c/e/cerv-amstel-lt-269ml-7896045505319.jpg', description: '', product: 'Amstel', price: '3,50', contentType: 'Lata 269ml', category: 'cerveja_unitario' },
      { id: 2, image: 'https://mfresh.s3.amazonaws.com/uploads/product/sku/18506/image/4ef2722a-2939-4bd2-a99b-1355bfad0afb.png', description: '', product: 'Amstel', price: '9,00', contentType: 'Garrafa 600ml', category: 'cerveja_unitario' },
      { id: 3, image: 'https://cdn.b4c.inf.br/storage/acouguebg/1000/cerveja-amstel-puro-malte-lata-350-ml_1_1624110634.jpg', description: '', product: 'Amstel', price: '4,50', contentType: 'Lata 350ml', category: 'cerveja_unitario' }
    ]
  }

  constructor() { }
}
