import { TestBed } from '@angular/core/testing';

import { TeacherdeacGuard } from './teacherdeac.guard';

describe('TeacherdeacGuard', () => {
  let guard: TeacherdeacGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TeacherdeacGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
