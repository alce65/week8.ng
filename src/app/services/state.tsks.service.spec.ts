import { TestBed } from '@angular/core/testing';

import { StateTsksService } from './state.tsks.service';

describe('StateTsksService', () => {
  let service: StateTsksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StateTsksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
