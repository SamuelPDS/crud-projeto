import { TestBed } from '@angular/core/testing';

import { HeaderServiceTsService } from './header.service.ts.service';

describe('HeaderServiceTsService', () => {
  let service: HeaderServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaderServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
