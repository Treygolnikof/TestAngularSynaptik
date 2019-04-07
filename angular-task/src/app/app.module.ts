import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShopListComponent } from './components/shop-list/shop-list.component';
import { ShopListItemComponent } from './components/shop-list-item/shop-list-item.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ShopAddFormComponent } from './components/shop-add-form/shop-add-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopListComponent,
    ShopListItemComponent,
    MessagesComponent,
    ShopAddFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
