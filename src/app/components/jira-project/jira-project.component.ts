import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-jira-project',
  templateUrl: './jira-project.component.html',
  styleUrls: ['./jira-project.component.css']
})
export class JiraProjectComponent implements OnInit {
  @Input() jira: any;
  constructor() { }

  ngOnInit() {
  }

}
