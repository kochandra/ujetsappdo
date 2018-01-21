import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ApproveImagesComponent } from './admin/approve-images/approve-images.component';
import { ApproveImageComponent } from './admin/approve-image/approve-image.component';

import { MyImageComponent } from './client/my-image/my-image.component';
import { MySubmissionComponent } from './client/my-submission/my-submission.component';
import { ImagePreviewComponent } from './client/image-preview/image-preview.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ImagesService } from './admin/services/images.service';
import { ImageService } from './client/services/image.service';
import { ImagePlaceholderPipe } from './admin/pipes/image-placeholder.pipe';
import { OrderByPipe } from './admin/pipes/order-by.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ApproveImagesComponent,
    MyImageComponent,
    MySubmissionComponent,
    ImagePreviewComponent,
    ApproveImageComponent,
    ImagePlaceholderPipe,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule
  ],
  providers: [ImagesService, ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
