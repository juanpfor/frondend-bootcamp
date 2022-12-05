import { TestBed } from '@angular/core/testing';

import { PreparacionesService } from './preparaciones.service';

describe('PreparacionesService', () => {
  let service: PreparacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreparacionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
