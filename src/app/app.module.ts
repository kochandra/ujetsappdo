import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ApproveImagesComponent } from './admin/approve-images/approve-images.component';
import { ApproveImageComponent } from './admin/approve-image/approve-image.component';
import { ImagePlaceholderPipe } from './admin/pipes/image-placeholder.pipe';
import { OrderByPipe } from './admin/pipes/order-by.pipe';
import { ImagesService } from './admin/services/images.service';

import { MyImageComponent } from './client/my-image/my-image.component';
import { MySubmissionComponent } from './client/my-submission/my-submission.component';
import { ImageService } from './client/services/image.service';
import { SearchComponent } from './admin/search/search.component';



@NgModule({
  declarations: [
    AppComponent,
    ApproveImagesComponent,
    MyImageComponent,
    MySubmissionComponent,
    ApproveImageComponent,
    ImagePlaceholderPipe,
    OrderByPipe,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpClientModule
  ],
  providers: [ImagesService, ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
