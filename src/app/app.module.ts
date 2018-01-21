import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { ApproveImagesComponent } from './approve-images/approve-images.component';
import { MyImageComponent } from './my-image/my-image.component';
import { MySubmissionComponent } from './my-submission/my-submission.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ImagePreviewComponent } from './image-preview/image-preview.component';


@NgModule({
  declarations: [
    AppComponent,
    ApproveImagesComponent,
    MyImageComponent,
    MySubmissionComponent,
    ImagePreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
