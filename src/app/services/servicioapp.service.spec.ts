import { TestBed } from '@angular/core/testing';

import { ServicioappService } from './servicioapp.service';

describe('ServicioappService', () => {
  let service: ServicioappService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioappService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
