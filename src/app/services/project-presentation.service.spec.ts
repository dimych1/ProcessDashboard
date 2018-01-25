import { TestBed, inject } from '@angular/core/testing';

import { ProjectPresentationService } from './project-presentation.service';

describe('ProjectPresentationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectPresentationService]
    });
  });

  it('should be created', inject([ProjectPresentationService], (service: ProjectPresentationService) => {
    expect(service).toBeTruthy();
  }));
});
