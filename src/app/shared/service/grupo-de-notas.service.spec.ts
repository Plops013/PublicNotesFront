import { TestBed } from '@angular/core/testing';

import { GrupoDeNotasService } from './grupo-de-notas.service';

describe('GrupoDeNotasService', () => {
  let service: GrupoDeNotasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrupoDeNotasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
