import { Component, OnInit } from '@angular/core';
import { Item } from '../../item';
import { ShoplistService } from '../../services/shoplist.service';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent implements OnInit {

  public items: Item[];

  constructor(private shopListService: ShoplistService) { }

  ngOnInit() {
  }

  addItem(name: string, description: string, price: number): void {
    name = name.trim();
    description = description.trim();
    if (!name || !description|| !price) { return; }
    this.shopListService.addItem({ name } as Item)
    .subscribe(item => {
      this.items.push(item);
    });
  }

}
