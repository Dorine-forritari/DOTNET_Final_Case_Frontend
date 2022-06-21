import { TestBed } from '@angular/core/testing';

import { JoinprojectService } from './joinproject.service';

describe('JoinprojectService', () => {
  let service: JoinprojectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JoinprojectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
