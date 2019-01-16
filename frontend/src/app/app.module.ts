import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { FunctionDemoComponent } from './function-demo/function-demo.component';
import { ReviewComponent } from './profile-page/review/review.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { ContractorComponent } from './profile-page/contractor/contractor.component';
import { ContractorWelcomePageComponent } from './out-of-app/contractor-welcome-page/contractor-welcome-page.component';
import { OutAppLayoutComponent } from './out-of-app/out-app-layout/out-app-layout.component';
import { MembershipLevelComponent } from './out-of-app/membership-level/membership-level.component';
import { LandingPageComponent  } from './landing-page/landing-page.component'
import { ContractorJobsListComponent } from './contractor-jobs-list/contractor-jobs-list.component';

const routes: Routes = [
  { path: 'function-demo', component: FunctionDemoComponent }, // THIS ROUTE IS FOR DEMOING ON AND PRACTICING ARCIBALDO
  { path: 'job-detail', component:  JobDetailComponent },
  { path: 'directory/contractor/id', component: ContractorComponent },
  { path:  'landing', component: LandingPageComponent },
  { path: 'review', component: ReviewComponent },
  { path: 'contractor/quotes', component: ContractorJobsListComponent },
  { path: 'contractor/welcome-page', component: ContractorWelcomePageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FunctionDemoComponent,
    ReviewComponent,
    JobDetailComponent,
    ContractorComponent,
    ContractorWelcomePageComponent,
    OutAppLayoutComponent,
    MembershipLevelComponent,
    LandingPageComponent,
    ContractorJobsListComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireFunctionsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
