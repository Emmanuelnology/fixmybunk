import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

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
import { QuoteTimelineComponent } from './quote-timeline/quote-timeline.component';
import { QuoteComponent } from './quote/quote.component';
import { ContractorRegisterComponent } from './out-of-app/contractor-register/contractor-register.component';
import { ModalComponent } from './modal/modal.component';
import { JobImageComponent } from './job-image/job-image.component';
import { QuoteSubmittedModalComponent } from './quote-submitted-modal/quote-submitted-modal.component';
import { PaymentDetailsComponent } from './out-of-app/payment-details/payment-details.component';
import { QuoteGridComponent } from './quote-grid/quote-grid.component';
import { AcceptedQuoteComponent } from './accepted-quote/accepted-quote.component';
import { LandlordMiniProfileComponent } from './landlord-mini-profile/landlord-mini-profile.component';
import { JobDetailsPageComponent } from './job-details-page/job-details-page.component';
import { InAppNavComponent } from './in-app-nav/in-app-nav.component';
import { MapComponent } from './map/map.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { MaintenanceRequestPageComponent } from './maintenance-request-page/maintenance-request-page.component';


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
  { path: 'contractor/register', component: ContractorRegisterComponent },
  { path: 'reported-by', component: ReportedByComponent},
  { path: 'membership-level', component: MembershipLevelComponent },
  { path: 'size', component: CompanySizeComponent},
  { path: 'timeline', component: QuoteTimelineComponent},
  { path: 'imagestack', component: ImageStackComponent },
  { path: 'payment', component: PaymentDetailsComponent },
  { path: 'accepted-quote', component: AcceptedQuoteComponent },
  { path: 'landlord-mini', component: LandlordMiniProfileComponent },
  { path: 'inAppNav', component: InAppNavComponent},
  { path: 'quote-grid', component: QuoteGridComponent},
  { path: 'job-details', component: JobDetailsPageComponent },
  { path: 'maintenance-request', component: MaintenanceRequestPageComponent },
  { path: 'map', component: MapComponent },
  { path: 'job-detail',
    component:  JobDetailComponent,
    data: {title: 'Job Detail'}
  },
  { path: 'job-image',
    component:  JobImageComponent,
    data: {title: 'Job Image'}
  },
  { path: 'profile',
    component: ContractorComponent,
    data: {title: 'Profile'}
  },
  { path: 'review',
    component: ReviewComponent,
    data: {title: 'Review'}
  },
  { path: 'feedback',
    component: FeedbackSectionComponent,
    data: {title: 'Feedback'}
  },
  { path: 'nav',
    component: LandingNavComponent,
    data: {title: 'Landing Nav'}
  },
  { path: 'landing',
    component: LandingPageComponent,
    data: {title: 'Landing Page'}
  },
  { path: 'contractor/quotes',
    component: ContractorJobsListComponent,
    data: {title: 'Quotes'}
  },
  { path: 'contractor/welcome',
    component: ContractorWelcomePageComponent,
    data: {title: 'Welcome'}
  },
  { path: 'contractor/register',
    component: ContractorRegisterComponent,
    data: {title: 'Register'}
  },
  { path: 'reported-by',
    component: ReportedByComponent,
    data: {title: 'Reported By'}
  },
  { path: 'membership-level',
    component: MembershipLevelComponent,
    data: {title: 'Membership Level'}
  },
  { path: 'size',
    component: CompanySizeComponent,
    data: {title: 'Size'}
  },
  { path: 'timeline',
    component: QuoteTimelineComponent,
    data: {title: 'Timeline'}
  },
  { path: 'payment',
    component: PaymentDetailsComponent,
    data: {title: 'Payment Details'}
  },
  { path: 'accepted-quote',
    component: AcceptedQuoteComponent,
    data: {title: 'Accepted Quote'}
  },
  { path: 'landlord-mini',
    component: LandlordMiniProfileComponent,
    data: {title: 'Landlord'}
  },
  { path: 'inAppNav',
    component: InAppNavComponent,
    data: {title: 'In App Nav'}
  },
  { path: 'quote-grid',
    component: QuoteGridComponent,
    data: {title: 'Quote Grid'}
  },
  { path: 'job-details',
    component: JobDetailsPageComponent,
    data: {title: 'Job Details'}
  },
  { path: 'map',
    component: MapComponent,
    data: {title: 'Map'}
  },
  { path: 'maintenance',
    component: MaintenanceRequestPageComponent,
    data: {title: 'Maintenance Request'}
  },
  { path: 'modal',
    component: ModalComponent,
    data: {title: 'Modal Page'}
  },
  { path: '',
    // redirectTo: '/profile',
    // pathMatch: 'full',
    component: ContractorComponent,
    data: {title: 'Home'}
  },
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
    QuoteComponent,
    ContractorRegisterComponent,
    JobImageComponent,
    QuoteTimelineComponent,
    ModalComponent,
    PaymentDetailsComponent,
    QuoteGridComponent,
    AcceptedQuoteComponent,
    QuoteSubmittedModalComponent,
    LandlordMiniProfileComponent,
    JobDetailsPageComponent,
    InAppNavComponent,
    MapComponent,
    BreadcrumbsComponent,
    MaintenanceRequestPageComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireFunctionsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
