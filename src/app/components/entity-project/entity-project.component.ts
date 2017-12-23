import { Component, OnInit } from '@angular/core';
import { ProjectPresentationService } from '../../srevices/project-presentation.service';

@Component({
  selector: 'app-entity-project',
  templateUrl: './entity-project.component.html',
  styleUrls: ['./entity-project.component.css']
})
export class EntityProjectComponent implements OnInit {

  constructor(private projectPresentationService: ProjectPresentationService) { }

  ngOnInit() {
  }

}
