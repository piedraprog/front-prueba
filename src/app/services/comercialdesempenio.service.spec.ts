import { TestBed } from '@angular/core/testing';

import { ComercialdesempenioService } from './comercialdesempenio.service';

describe('ComercialdesempenioService', () => {
  let service: ComercialdesempenioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComercialdesempenioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
