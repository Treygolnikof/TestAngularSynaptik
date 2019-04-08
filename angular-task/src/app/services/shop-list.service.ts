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

  visibleItems = [];

  total = 0;

  constructor(private messageService: MessageService) { }

  getTotal() {
    let sum = 0;
    for (const item of this.data) {
      sum += +item.price;
    }
    this.total = sum;
  }

  searchCard(term) {
    if (term.length === 0) {
        return this.visibleItems = this.data;
    }

    this.visibleItems = this.data.filter((item) => {
        return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  }

  addItem(name, description, price) {
    this.data.unshift({name, description, price});
    this.messageService.add(`Item(${name}) successfully added`, true);
    this.getTotal();
  }

  deleteItem(item) {
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] === item) {
        this.messageService.add(`Item(${this.data[i].name}) successfully deleted`, false);
        this.data.splice(i, 1);
      }
    }
    this.getTotal();
  }
}
