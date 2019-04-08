import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopTotalComponent } from './shop-total.component';

describe('ShopTotalComponent', () => {
  let component: ShopTotalComponent;
  let fixture: ComponentFixture<ShopTotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopTotalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
