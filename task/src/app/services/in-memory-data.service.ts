import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const items = [
      { name: 'Snikers', description: 'Big Snikers', price: 5 },
      { name: 'Banana', description: 'Yellow Equador Banana', price: 3 }
    ];
    return {items};
  }
}