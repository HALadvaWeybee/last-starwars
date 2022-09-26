import { TestBed } from '@angular/core/testing';

import { CherectersService } from './cherecters.service';

describe('CherectersService', () => {
  let service: CherectersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CherectersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
