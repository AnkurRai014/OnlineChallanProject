import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtoReportComponent } from './rto-report.component';

describe('RtoReportComponent', () => {
  let component: RtoReportComponent;
  let fixture: ComponentFixture<RtoReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RtoReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RtoReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
