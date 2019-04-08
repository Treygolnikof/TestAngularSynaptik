import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ShopListService } from '../../services/shop-list.service';

@Component({
  selector: 'app-shop-add-form',
  templateUrl: './shop-add-form.component.html',
  styleUrls: ['./shop-add-form.component.css']
})
export class ShopAddFormComponent implements OnInit {

  constructor(private shopListService: ShopListService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl(''),
      price: new FormControl('', Validators.required)
    });
  }

  addItem() {
    this.addForm.value.name = this.addForm.value.name[0].toUpperCase() + this.addForm.value.name.slice(1);
    if (this.addForm.value.description === '' || this.addForm.value.description === null || this.addForm.value.description === undefined) {
      this.addForm.value.description = 'No description';
    } else {
      this.addForm.value.description = this.addForm.value.description[0].toUpperCase() + this.addForm.value.description.slice(1);
    }
    this.shopListService.addItem(this.addForm.value.name, this.addForm.value.description, this.addForm.value.price);
    this.addForm.reset();
  }

}
