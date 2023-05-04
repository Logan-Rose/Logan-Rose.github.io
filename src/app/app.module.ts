import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { NgParticlesModule } from 'ng-particles';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { LiveResumeComponent } from './live-resume/live-resume.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { GithubContributionsComponent } from './github-contributions/github-contributions.component';
import { HeatmapDemoComponent } from './heatmap-demo/heatmap-demo.component';
import { NgApexchartsModule } from 'ng-apexcharts';
@NgModule({
  declarations: [
    AppComponent,
    LiveResumeComponent,
    GithubContributionsComponent,
    HeatmapDemoComponent,
  ],
  imports: [
    NgApexchartsModule,
    MatDialogModule,
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatCardModule,
    BrowserAnimationsModule,
    NgParticlesModule,
    FontAwesomeModule,
    MatChipsModule,
    GraphQLModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
