import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { FunctionDemoComponent } from './function-demo/function-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    FunctionDemoComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireFunctionsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }