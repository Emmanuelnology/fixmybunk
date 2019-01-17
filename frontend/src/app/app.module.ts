import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { FunctionDemoComponent } from './function-demo/function-demo.component';
import { LandingNavComponent } from './landing-nav/landing-nav.component';
import { ReviewComponent } from './profile-page/review/review.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { ContractorComponent } from './profile-page/contractor/contractor.component';
import { ContractorWelcomePageComponent } from './out-of-app/contractor-welcome-page/contractor-welcome-page.component';
import { OutAppLayoutComponent } from './out-of-app/out-app-layout/out-app-layout.component';
import { MembershipLevelComponent } from './out-of-app/membership-level/membership-level.component';
import { AvatarIconComponent } from './avatar-icon/avatar-icon.component';
import { LandingPageComponent  } from './out-of-app/landing-page/landing-page.component';
import { ContractorJobsListComponent } from './contractor-jobs-list/contractor-jobs-list.component';
import { MembershipLevelOptionsComponent } from './out-of-app/membership-level-options/membership-level-options.component';
import { ReportedByComponent } from './reported-by/reported-by.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { FeedbackSectionComponent } from './profile-page/feedback-section/feedback-section.component';
import { ImageStackComponent } from './image-stack/image-stack.component';
import { SkewImageComponent } from './skew-image/skew-image.component';
import { CompanySizeComponent } from './company-size/company-size.component';
import { ContractorRegTitleComponent } from './out-of-app/contractor-reg-title/contractor-reg-title.component';
import { StarComponent } from './star/star.component';
import { ModalComponent } from './modal/modal.component';
import { JobImageComponent } from './job-image/job-image.component';
import { QuoteSubmittedModalComponent } from './quote-submitted-modal/quote-submitted-modal.component';

const routes: Routes = [
  { path: 'function-demo', component: FunctionDemoComponent }, // THIS ROUTE IS FOR DEMOING ON AND PRACTICING ARCIBALDO
  { path: 'job-detail', component:  JobDetailComponent },
  { path: 'job-image', component:  JobImageComponent },
  { path: 'profile', component: ContractorComponent },
  { path: 'review', component: ReviewComponent },
  { path: 'feedback', component: FeedbackSectionComponent },
  { path: 'nav', component: LandingNavComponent},
  { path: 'landing', component: LandingPageComponent },
  { path: 'review', component: ReviewComponent },
  { path: 'contractor/quotes', component: ContractorJobsListComponent },
  { path: 'contractor/welcome', component: ContractorWelcomePageComponent },
  { path: 'reported-by', component: ReportedByComponent},
  { path: 'membership-level', component: MembershipLevelComponent },
  { path: 'imagestack', component: ImageStackComponent },
  { path: 'size', component: CompanySizeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FunctionDemoComponent,
    LandingNavComponent,
    ReviewComponent,
    JobDetailComponent,
    ContractorComponent,
    ContractorWelcomePageComponent,
    OutAppLayoutComponent,
    MembershipLevelComponent,
    AvatarIconComponent,
    LandingPageComponent,
    ContractorJobsListComponent,
    MembershipLevelOptionsComponent,
    ReportedByComponent,
    ReportedByComponent,
    StarRatingComponent,
    FeedbackSectionComponent,
    ImageStackComponent,
    SkewImageComponent,
    CompanySizeComponent,
    ContractorRegTitleComponent,
    StarComponent,
    JobImageComponent,
    QuoteSubmittedModalComponent,
    ModalComponent
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
