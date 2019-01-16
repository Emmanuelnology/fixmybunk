import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { FunctionDemoComponent } from './function-demo/function-demo.component';
<<<<<<< HEAD
import { ReviewComponent } from '././profile-page/review/review.component';
=======
import { ReviewComponent } from './profile-page/review/review.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { ContractorComponent } from './profile-page/contractor/contractor.component';
import { ContractorWelcomePageComponent } from './out-of-app/contractor-welcome-page/contractor-welcome-page.component';

const routes: Routes = [
  { path: 'job-detail', component:  JobDetailComponent },
  { path: 'directory/contractor/id', component: ContractorComponent }
];
>>>>>>> 4575f7a57985c68fc814f6f171e781f8d65b91ec

@NgModule({
  declarations: [
    AppComponent,
    FunctionDemoComponent,
    ReviewComponent,
    JobDetailComponent,
    ContractorComponent,
    ContractorWelcomePageComponent
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
