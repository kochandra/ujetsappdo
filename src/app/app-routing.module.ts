import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MySubmissionComponent } from './client/my-submission/my-submission.component';
import { MyImageComponent } from './client/my-image/my-image.component';
import { ApproveImagesComponent } from './admin/approve-images/approve-images.component';
import { ApproveImageComponent } from './admin/approve-image/approve-image.component';
import { SearchComponent } from './admin/search/search.component';

const routes = [
  {path: '', redirectTo: '/my-info-submit', pathMatch: 'full'},  
  {path:'my-info-submit', component: MySubmissionComponent },
  {path:'my-info-submit/:uniqueCode', component: MySubmissionComponent },
  {path:'my-info-complete', component: MyImageComponent },
  {path:'admin-search', component: ApproveImagesComponent},
  {path:'admin-search/:id', component: ApproveImageComponent},
  {path:'admin', component: SearchComponent}    
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
