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
import { ContractorComponent } from './profile-page/contractor/contractor.component';

const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    FunctionDemoComponent,
    ReviewComponent,
    ContractorComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireFunctionsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
