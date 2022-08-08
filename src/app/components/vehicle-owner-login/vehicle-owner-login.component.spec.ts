import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleOwnerLoginComponent } from './vehicle-owner-login.component';

describe('VehicleOwnerLoginComponent', () => {
  let component: VehicleOwnerLoginComponent;
  let fixture: ComponentFixture<VehicleOwnerLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleOwnerLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleOwnerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
