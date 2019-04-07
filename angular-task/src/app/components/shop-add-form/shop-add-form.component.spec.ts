import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopAddFormComponent } from './shop-add-form.component';

describe('ShopAddFormComponent', () => {
  let component: ShopAddFormComponent;
  let fixture: ComponentFixture<ShopAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
