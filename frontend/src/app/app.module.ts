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
import { ContractorParentComponent } from './contractor-parent/contractor-parent.component';
import { ModalNewComponent } from './modal-new/modal-new.component';
import { DirectoryComponent } from './directory/directory.component';
import { DirectoryParentComponent } from './directory-parent/directory-parent.component';
import { ContractorQuoteIdComponent } from './contractor-quote-id/contractor-quote-id.component';
import { LandordMaintenanceRequestComponent } from './landord-maintenance-request/landord-maintenance-request.component';


const routes: Routes = [
  { path: 'directory',
    component: DirectoryParentComponent,
    data: {title: 'Contractor Directory'},
    children: [
      { path: 'contractor/id',
        component: ContractorComponent,
        data: {title: 'CS Gas Fitting'}
      },
      { path: '',
        component: DirectoryComponent,
        data: {title: ''},
      }
    ]
  },
  { path: 'contractor/quotes',
    component: ContractorParentComponent,
    data: {title: 'Jobs List'},
    children: [
      { path: 'id',
        component: ContractorQuoteIdComponent,
        data: {title: 'Broken Boiler'}
      },
      { path: '',
        component: ContractorJobsListComponent,
        data: {title: ''},
      }
    ]
  },
  { path: 'maintenance-request',
    component: LandordMaintenanceRequestComponent,
    data: {title: 'Maintenance Request'}
  },
  { path: 'contractor/welcome',
    component: ContractorWelcomePageComponent,
    data: {title: 'Welcome'}
  },
  { path: 'register/contractor',
    component: ContractorRegisterComponent,
    data: {title: 'Register'}
  },
  { path: 'contractor/membership-level',
    component: MembershipLevelComponent
  },
  { path: 'contractor/payment',
    component: PaymentDetailsComponent
  },
  { path: 'quote-grid',
    component: QuoteGridComponent
  },
  { path: '',
    component: LandingPageComponent,
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
    ContractorParentComponent,
    ModalNewComponent,
    DirectoryComponent,
    DirectoryParentComponent,
    ContractorQuoteIdComponent,
    LandordMaintenanceRequestComponent,

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
