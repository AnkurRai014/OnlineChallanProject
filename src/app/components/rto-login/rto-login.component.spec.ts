import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtoLoginComponent } from './rto-login.component';

describe('RtoLoginComponent', () => {
  let component: RtoLoginComponent;
  let fixture: ComponentFixture<RtoLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RtoLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RtoLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
