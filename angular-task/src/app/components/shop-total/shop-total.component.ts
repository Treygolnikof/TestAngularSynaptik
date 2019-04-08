import { Component, OnInit, DoCheck } from '@angular/core';

import { ShopListService } from '../../services/shop-list.service';

@Component({
  selector: 'app-shop-total',
  templateUrl: './shop-total.component.html',
  styleUrls: ['./shop-total.component.css']
})
export class ShopTotalComponent implements OnInit, DoCheck {

  total = 0;

  constructor(private shopListService: ShopListService) { }

  ngOnInit() {
    this.shopListService.getTotal();
  }

  deleteItem(item) {
    this.shopListService.deleteItem(item);
  }

  ngDoCheck(): void {
    this.shopListService.getTotal();
    this.total = this.shopListService.total;
  }
}
