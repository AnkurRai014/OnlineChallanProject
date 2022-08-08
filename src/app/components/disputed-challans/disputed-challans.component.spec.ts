import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputedChallansComponent } from './disputed-challans.component';

describe('DisputedChallansComponent', () => {
  let component: DisputedChallansComponent;
  let fixture: ComponentFixture<DisputedChallansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputedChallansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisputedChallansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
