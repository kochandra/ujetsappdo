import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MySubmissionComponent } from './client/my-submission/my-submission.component';
import { MyImageComponent } from './client/my-image/my-image.component';
import { ApproveImagesComponent } from './admin/approve-images/approve-images.component';
import { ApproveImageComponent } from './admin/approve-image/approve-image.component';

const routes = [
  {path: '', redirectTo: '/my-submission', pathMatch: 'full'},  
  {path:'my-submission', component: MySubmissionComponent },
  {path:'my-image', component: MyImageComponent },
  {path:'my-approvals', component: ApproveImagesComponent},
  {path:'my-approval/:uniqueCode', component: ApproveImageComponent}  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
