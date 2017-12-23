import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProjectMaintenanceService {

  constructor(private http: HttpClient) { }

  getProjects() {
    return this.http.get(`http://localhost:4200/assets/data.json`)
      // .map((res: Response) => res.json());
  }

}
