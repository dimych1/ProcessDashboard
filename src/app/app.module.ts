import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { MainBordComponent } from './components/main-bord/main-bord.component';
import { ListProjectsComponent } from './components/list-projects/list-projects.component';
import { EntityProjectComponent } from './components/entity-project/entity-project.component';
import { ProjectPresentationService } from './srevices/project-presentation.service';
import { ProjectMaintenanceService } from './srevices/project-maintenance.service';

@NgModule({
  declarations: [
    AppComponent,
    MainBordComponent,
    ListProjectsComponent,
    EntityProjectComponent
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [ProjectPresentationService, ProjectMaintenanceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
