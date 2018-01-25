import { TestBed, inject } from '@angular/core/testing';

import { AppConfig.Service.TsService } from './app-config.service.ts.service';

describe('AppConfig.Service.TsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppConfig.Service.TsService]
    });
  });

  it('should be created', inject([AppConfig.Service.TsService], (service: AppConfig.Service.TsService) => {
    expect(service).toBeTruthy();
  }));
});
