import { TestBed } from '@angular/core/testing';

import { EventsdeacGuard } from './eventsdeac.guard';

describe('EventsdeacGuard', () => {
  let guard: EventsdeacGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EventsdeacGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
