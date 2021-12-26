import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDeetailComponent } from './product-deetail.component';

describe('ProductDeetailComponent', () => {
  let component: ProductDeetailComponent;
  let fixture: ComponentFixture<ProductDeetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDeetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDeetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
