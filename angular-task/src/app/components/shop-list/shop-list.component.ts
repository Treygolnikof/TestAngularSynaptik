import { Component, OnInit } from '@angular/core';

import { ShopListService } from '../../services/shop-list.service';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {

  data = [];

  constructor(private shopListService: ShopListService) { }

  ngOnInit() {
    this.data = this.shopListService.data;
  }

}
