import { TestBed } from '@angular/core/testing';

import { SignupdeacGuard } from './signupdeac.guard';

describe('SignupdeacGuard', () => {
  let guard: SignupdeacGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SignupdeacGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
