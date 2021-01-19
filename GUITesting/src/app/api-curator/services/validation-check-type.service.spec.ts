import {TestBed} from '@angular/core/testing';

import {ValidationCheckTypeService} from './validation-check-type.service';

describe('ValidationCheckTypeService', () => {
  let service: ValidationCheckTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidationCheckTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
