import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingChallansComponent } from './pending-challans.component';

describe('PendingChallansComponent', () => {
  let component: PendingChallansComponent;
  let fixture: ComponentFixture<PendingChallansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingChallansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingChallansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
