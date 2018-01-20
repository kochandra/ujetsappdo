import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { MyImagesComponent } from './my-images/my-images.component';
import { ApproveImagesComponent } from './approve-images/approve-images.component';
import { MyImageComponent } from './my-image/my-image.component';
import { MySubmissionComponent } from './my-submission/my-submission.component';


@NgModule({
  declarations: [
    AppComponent,
    MyImagesComponent,
    ApproveImagesComponent,
    MyImageComponent,
    MySubmissionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
