import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputedChallansActionsComponent } from './disputed-challans-actions.component';

describe('DisputedChallansActionsComponent', () => {
  let component: DisputedChallansActionsComponent;
  let fixture: ComponentFixture<DisputedChallansActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputedChallansActionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisputedChallansActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
