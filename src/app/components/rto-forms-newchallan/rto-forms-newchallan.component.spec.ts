import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtoFormsNewchallanComponent } from './rto-forms-newchallan.component';

describe('RtoFormsNewchallanComponent', () => {
  let component: RtoFormsNewchallanComponent;
  let fixture: ComponentFixture<RtoFormsNewchallanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RtoFormsNewchallanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RtoFormsNewchallanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
