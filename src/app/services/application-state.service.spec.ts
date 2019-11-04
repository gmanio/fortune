import { TestBed } from '@angular/core/testing';

import { ApplicationStateService } from 'src/app/services/application-state.service';

describe('ApplicationStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApplicationStateService = TestBed.get(ApplicationStateService);
    expect(service).toBeTruthy();
  });
});
