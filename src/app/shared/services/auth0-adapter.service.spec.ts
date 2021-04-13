import { TestBed } from '@angular/core/testing';

import { Auth0AdapterService } from './auth0-adapter.service';

describe('Auth0AdapterService', () => {
  let service: Auth0AdapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Auth0AdapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
