import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleOwnerHomePageComponent } from './vehicle-owner-home-page.component';

describe('VehicleOwnerHomePageComponent', () => {
  let component: VehicleOwnerHomePageComponent;
  let fixture: ComponentFixture<VehicleOwnerHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleOwnerHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleOwnerHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
