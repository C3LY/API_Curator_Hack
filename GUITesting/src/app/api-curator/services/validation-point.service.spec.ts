import {TestBed} from '@angular/core/testing';

import {ValidationPointService} from './validation-point.service';

describe('ValidationPointService', () => {
  let service: ValidationPointService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidationPointService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
