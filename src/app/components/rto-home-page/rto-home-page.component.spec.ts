import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtoHomePageComponent } from './rto-home-page.component';

describe('RtoHomePageComponent', () => {
  let component: RtoHomePageComponent;
  let fixture: ComponentFixture<RtoHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RtoHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RtoHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
