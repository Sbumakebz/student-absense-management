import { TestBed } from '@angular/core/testing';

import { AuthorisationHttpInterceptorService } from './authorisation-http-interceptor.service';

describe('AuthorisationHttpInterceptorService', () => {
  let service: AuthorisationHttpInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorisationHttpInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
