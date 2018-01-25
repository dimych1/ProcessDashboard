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
      (data:any) => {
        this.listProjects = data['events'];
        if (this.listProjects.length > 0) {
          this.selectedProject = this.listProjects[0];
        }
      }
      );
  }
  setSelectedProject(selectedProject: any) { this.selectedProject = selectedProject; }
}