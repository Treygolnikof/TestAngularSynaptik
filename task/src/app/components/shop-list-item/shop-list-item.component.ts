import { Component, OnInit } from '@angular/core';
import { Item } from '../../item';
import { ShoplistService } from '../../services/shoplist.service';

@Component({
  selector: 'app-shop-list-item',
  templateUrl: './shop-list-item.component.html',
  styleUrls: ['./shop-list-item.component.scss']
})
export class ShopListItemComponent implements OnInit {

  today: number = Date.now();

  public items: Item[];

  constructor(private shopListService: ShoplistService) { }

  private getData(): void {
    this.shopListService.getData()
      .subscribe( items => this.items = items);
  }

  ngOnInit() {
    this.getData()
  }
}

