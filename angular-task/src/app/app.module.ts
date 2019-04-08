import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShopListComponent } from './components/shop-list/shop-list.component';
import { ShopListItemComponent } from './components/shop-list-item/shop-list-item.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ShopAddFormComponent } from './components/shop-add-form/shop-add-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ShopTotalComponent } from './components/shop-total/shop-total.component';
import { SearchPanelComponent } from './components/search-panel/search-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopListComponent,
    ShopListItemComponent,
    MessagesComponent,
    ShopAddFormComponent,
    ShopTotalComponent,
    SearchPanelComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
