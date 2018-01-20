import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MySubmissionComponent } from './my-submission/my-submission.component';
import { MyImageComponent } from './my-image/my-image.component';
import { MyImagesComponent } from './my-images/my-images.component';

const routes = [
  {path: '', redirectTo: '/my-submission', pathMatch: 'full'},  
  {path:'my-submission', component: MySubmissionComponent },
  {path:'my-image', component: MyImageComponent },
  {path: 'my-images', component: MyImagesComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }