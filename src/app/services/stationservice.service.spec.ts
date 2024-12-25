import { TestBed } from '@angular/core/testing';

import { StationserviceService } from './stationservice.service';

describe('StationserviceService', () => {
  let service: StationserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StationserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
