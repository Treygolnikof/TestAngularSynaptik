import { Component, OnInit, DoCheck } from '@angular/core';

import { ShopListService } from '../../services/shop-list.service';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.css']
})
export class SearchPanelComponent implements OnInit, DoCheck {

  term = '';

  constructor(private shopListService: ShopListService) { }

  ngOnInit() {
  }

  ngDoCheck() {
    this.shopListService.searchCard(this.term);
  }

}
