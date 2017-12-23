import { Injectable } from '@angular/core';
import { ProjectMaintenanceService } from './project-maintenance.service';
@Injectable()
export class ProjectPresentationService {
  listProjects = [];
  selectedProject: any;
  constructor(private projectMaintenanceService: ProjectMaintenanceService) { }
  loadProgect() {
    this.projectMaintenanceService.getProjects()
      .subscribe(
      data => this.listProjects = data.events;
      );
  }
  setSelectedProject(selectedProject: any) { this.selectedProject = selectedProject; }
}
