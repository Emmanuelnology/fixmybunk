import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { RouterModule } from '@angular/router';
=======
import { RouterModule, Routes } from '@angular/router';
>>>>>>> 79a358cb5ff367db51a786dfbc8b007c82035d5a

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

const routes: Routes = [
  { path: 'job-detail', component:  JobDetailComponent }
];

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
<<<<<<< HEAD
    RouterModule.forRoot([
      { path: 'job-detail', component:  JobDetailComponent },
    ]),
=======
    RouterModule.forRoot(routes)
>>>>>>> 79a358cb5ff367db51a786dfbc8b007c82035d5a
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
