import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnrollSubscriberComponent } from './enroll-subscriber/enroll-subscriber.component';
import { DeleteOfferComponent } from './delete-offer/delete-offer.component';
import { CreateOfferComponent } from './create-offer/create-offer.component';
import { GenerateReportComponent } from './generate-report/generate-report.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DataStorageService } from './shared/data-storage.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalBasic } from './modal.basic';
import { CreateSingleOfferComponent } from './create-single-offer/create-single-offer.component';
import { ModifyOfferComponent } from './modify-offer/modify-offer.component';
import {ToastrModule} from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { TSPToastrService } from './_service/TSPToastrService';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OffersComponent } from './offers/offers.component';
import { AlertComponent } from './_components/alert/alert.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './_service/auth.service';
import { TokenInterceptor } from './auth/token.iterceptor';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    EnrollSubscriberComponent,
    DeleteOfferComponent,
    CreateOfferComponent,
    GenerateReportComponent ,
    NgbdModalBasic,
    CreateSingleOfferComponent,
    ModifyOfferComponent,
    OffersComponent,
    AlertComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule ,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgHttpLoaderModule.forRoot(),
    RouterModule
  ],
  providers: [DataStorageService, TSPToastrService/*  AuthService, */
   /*  {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    } */],
  bootstrap: [AppComponent]
})
export class AppModule { }
