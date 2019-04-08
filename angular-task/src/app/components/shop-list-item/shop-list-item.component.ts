import { Component, OnInit, Input } from '@angular/core';

import { Item } from '../../item';
import { ShopListService } from '../../services/shop-list.service';

@Component({
  selector: 'app-shop-list-item',
  templateUrl: './shop-list-item.component.html',
  styleUrls: ['./shop-list-item.component.css']
})
export class ShopListItemComponent implements OnInit {

  date: number = Date.now();
  condition = true;

  constructor(private shopListService: ShopListService) { }

  ngOnInit() {
  }

  deleteItem(item) {
    this.shopListService.deleteItem(item);
  }

  toggle() {
      this.condition = !this.condition;
  }

}
