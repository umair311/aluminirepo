import { TestBed } from '@angular/core/testing';

import { StudentdeacGuard } from './studentdeac.guard';

describe('StudentdeacGuard', () => {
  let guard: StudentdeacGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(StudentdeacGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
