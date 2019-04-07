import { Component, OnInit} from '@angular/core';

import { ShopListService } from '../../services/shop-list.service';

@Component({
  selector: 'app-shop-add-form',
  templateUrl: './shop-add-form.component.html',
  styleUrls: ['./shop-add-form.component.css']
})
export class ShopAddFormComponent implements OnInit {

  constructor(private shopListService: ShopListService) { }

  ngOnInit() {
  }

  addItem(name, description, price) {
    if (!name || !description || !price) { return; }
    this.shopListService.addItem(name, description, price);
  }

}
