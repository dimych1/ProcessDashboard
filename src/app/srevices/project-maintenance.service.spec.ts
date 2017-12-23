import { TestBed, inject } from '@angular/core/testing';

import { ProjectMaintenanceService } from './project-maintenance.service';

describe('ProjectMaintenanceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectMaintenanceService]
    });
  });

  it('should be created', inject([ProjectMaintenanceService], (service: ProjectMaintenanceService) => {
    expect(service).toBeTruthy();
  }));
});
