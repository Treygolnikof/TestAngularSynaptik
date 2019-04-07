import { Injectable } from '@angular/core';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ShopListService {
  data = [
    { name: 'Snikers', description: 'Big Snikers', price: 5 },
    { name: 'Banana', description: 'Yellow Equador Banana', price: 3 }
  ];

  constructor(private messageService: MessageService) { }

  addItem(name: string, description: string, price: number) {
    this.data.unshift({name, description, price});
    this.messageService.add('Item successfully added');
  }

  deleteItem(item) {
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] === item) {
        this.data.splice(i, 1);
      }
    }
    this.messageService.add('Item successfully deleted');
  }
}
