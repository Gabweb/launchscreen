import { TestBed, inject } from '@angular/core/testing';

import { UrisService } from './uris.service';

describe('UrisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UrisService]
    });
  });

  it('should be created', inject([UrisService], (service: UrisService) => {
    expect(service).toBeTruthy();
  }));
});
