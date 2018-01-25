import { Component, OnInit ,Input} from '@angular/core';
import { ProjectPresentationService } from '../../services/project-presentation.service';

@Component({
  selector: 'app-entity-project',
  templateUrl: './entity-project.component.html',
  styleUrls: ['./entity-project.component.css']
})
export class EntityProjectComponent implements OnInit {
  @Input() projectData: any;
  constructor(private projectPresentationService: ProjectPresentationService) { }

  ngOnInit() {
  }

}
