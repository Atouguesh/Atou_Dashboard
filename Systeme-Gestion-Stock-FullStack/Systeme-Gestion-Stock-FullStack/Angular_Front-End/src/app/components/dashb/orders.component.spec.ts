import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbComponent } from './orders.component';

describe('OrdersComponent', () => {
  let component: DashbComponent;
  let fixture: ComponentFixture<DashbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
