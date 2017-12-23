import { Component, OnInit } from '@angular/core';
import { ProjectPresentationService } from '../../srevices/project-presentation.service';

@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrls: ['./list-projects.component.css']
})
export class ListProjectsComponent implements OnInit {

  constructor(private projectPresentationService: ProjectPresentationService) {
    this.projectPresentationService.loadProgect();
  }
  list = [];
  ngOnInit() {
    this.list = this.projectPresentationService.listProjects;
  }
  selectThisEvent(selectedEvent:any){
    this.projectPresentationService.setSelectedProject(selectedEvent);
  }
}
