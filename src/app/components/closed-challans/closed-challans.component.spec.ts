import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedChallansComponent } from './closed-challans.component';

describe('ClosedChallansComponent', () => {
  let component: ClosedChallansComponent;
  let fixture: ComponentFixture<ClosedChallansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClosedChallansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClosedChallansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
