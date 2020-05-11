import { TestBed } from '@angular/core/testing';

import { HomedeacGuard } from './homedeac.guard';

describe('HomedeacGuard', () => {
  let guard: HomedeacGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HomedeacGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
