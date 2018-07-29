import { TestBed, inject } from '@angular/core/testing';
import { BreakpointService } from './breakpoint.service';
import { LayoutModule } from '@angular/cdk/layout';

describe('BreakpointService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BreakpointService],
      imports: [LayoutModule]
    });
  });

  it('should be created', inject([BreakpointService], (service: BreakpointService) => {
    expect(service).toBeTruthy();
  }));
});
