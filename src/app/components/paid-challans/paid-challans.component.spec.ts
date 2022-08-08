import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidChallansComponent } from './paid-challans.component';

describe('PaidChallansComponent', () => {
  let component: PaidChallansComponent;
  let fixture: ComponentFixture<PaidChallansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaidChallansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaidChallansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
