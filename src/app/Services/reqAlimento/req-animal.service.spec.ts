import { TestBed } from '@angular/core/testing';

import { ReqAnimalService } from './req-animal.service';

describe('ReqAnimalService', () => {
  let service: ReqAnimalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReqAnimalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
