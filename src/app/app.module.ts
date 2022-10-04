import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImagesComponent } from './images/images.component';
import { CaptureImageComponent } from './images/capture-image/capture-image.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CompareImagesComponent } from './images/compare-images/compare-images.component';
import { ListImagesComponent } from './images/list-images/list-images.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingComponent } from './landing/landing.component';
import { ImageReviewComponent } from './images/image-review/image-review.component';

@NgModule({
  declarations: [
    AppComponent,
    ImagesComponent,
    CaptureImageComponent,
    CompareImagesComponent,
    ListImagesComponent,
    NavbarComponent,
    LandingComponent,
    ImageReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
