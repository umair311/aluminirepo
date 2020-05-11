import { TestBed } from '@angular/core/testing';

import { AluminideacGuard } from './aluminideac.guard';

describe('AluminideacGuard', () => {
  let guard: AluminideacGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AluminideacGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
