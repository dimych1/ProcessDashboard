import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

import {AppConfigService} from './app-config.service';

@Injectable()
export class ProjectMaintenanceService {

  constructor(private http: HttpClient,private configService: AppConfigService) { }

  getProjects() {
    console.log("configService: ",this.configService.config)
    return this.http.get(this.configService.config.SourceURL)
    // return this.http.get(`http://localhost:4200/assets/data.json`)
      // .map((res: Response) => res.json());
  }

}
