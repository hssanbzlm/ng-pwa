import { TestBed } from '@angular/core/testing';

import { CustomAuthAdapterService } from './custom-auth-adapter.service';

describe('CustomAuthAdapterService', () => {
  let service: CustomAuthAdapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomAuthAdapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
