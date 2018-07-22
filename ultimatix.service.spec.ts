import { TestBed, inject } from '@angular/core/testing';

import { UltimatixService } from './ultimatix.service';

describe('UltimatixService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UltimatixService]
    });
  });

  it('should be created', inject([UltimatixService], (service: UltimatixService) => {
    expect(service).toBeTruthy();
  }));
});
