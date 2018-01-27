import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MySubmissionComponent } from './client/my-submission/my-submission.component';
import { MyImageComponent } from './client/my-image/my-image.component';
import { ApproveImagesComponent } from './admin/approve-images/approve-images.component';
import { ApproveImageComponent } from './admin/approve-image/approve-image.component';

const routes = [
  {path: '', redirectTo: '/my-info-submit', pathMatch: 'full'},  
  {path:'my-info-submit', component: MySubmissionComponent },
  {path:'my-info-submit/:uniqueCode', component: MySubmissionComponent },
  {path:'my-info-complete', component: MyImageComponent },
  {path:'admin', component: ApproveImagesComponent},
  {path:'admin/:id', component: ApproveImageComponent}  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
