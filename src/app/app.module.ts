import { BrowserModule } from '@angular/platform-browser';
import { NgModule,APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { MainBordComponent } from './components/main-bord/main-bord.component';
import { ListProjectsComponent } from './components/list-projects/list-projects.component';
import { EntityProjectComponent } from './components/entity-project/entity-project.component';
import { ProjectPresentationService } from './services/project-presentation.service';
import { ProjectMaintenanceService } from './services/project-maintenance.service';
import { AppConfigService } from './services/app-config.service';
import { JiraProjectComponent } from './components/jira-project/jira-project.component';
import { TopNavBarComponent } from './components/top-nav-bar/top-nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    MainBordComponent,
    ListProjectsComponent,
    EntityProjectComponent,
    JiraProjectComponent,
    TopNavBarComponent
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [ProjectPresentationService
            , ProjectMaintenanceService
          , AppConfigService,
          {
            'provide': APP_INITIALIZER,
            'useFactory': init_app,
            'deps': [AppConfigService],
            'multi': true,
          }],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function init_app(configService: AppConfigService){
  // Load Config service before loading other components / services
  return () => {
    return configService.load();
  };
}