import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateChallanFormComponent } from './update-challan-form.component';

describe('UpdateChallanFormComponent', () => {
  let component: UpdateChallanFormComponent;
  let fixture: ComponentFixture<UpdateChallanFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateChallanFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateChallanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
