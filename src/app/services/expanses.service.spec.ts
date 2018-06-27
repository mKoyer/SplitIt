import { TestBed, inject } from '@angular/core/testing';

import { ExpansesService } from './expanses.service';

describe('ExpansesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExpansesService]
    });
  });

  it('should be created', inject([ExpansesService], (service: ExpansesService) => {
    expect(service).toBeTruthy();
  }));
});
