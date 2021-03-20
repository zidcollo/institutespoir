import { TestBed } from '@angular/core/testing';

import { ServiceeleveService } from './serviceeleve.service';

describe('ServiceeleveService', () => {
  let service: ServiceeleveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceeleveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
