import { TestBed } from '@angular/core/testing';

import { ProfiledeacGuard } from './profiledeac.guard';

describe('ProfiledeacGuard', () => {
  let guard: ProfiledeacGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProfiledeacGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
