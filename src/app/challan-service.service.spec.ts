import { TestBed } from '@angular/core/testing';

import { ChallanServiceService } from './challan-service.service';

describe('ChallanServiceService', () => {
  let service: ChallanServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChallanServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
