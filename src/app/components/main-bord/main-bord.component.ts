import { Component, OnInit } from '@angular/core';
import { ProjectPresentationService } from '../../services/project-presentation.service';

@Component({
  selector: 'app-main-bord',
  templateUrl: './main-bord.component.html',
  styleUrls: ['./main-bord.component.css']
})
export class MainBordComponent implements OnInit {

  constructor(private projectPresentationService: ProjectPresentationService) { }

  ngOnInit() {
  }

}
