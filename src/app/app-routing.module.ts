import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamPageComponent } from './exam-page/exam-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { myAuthGaurd } from './myAuthgaurd';


const routes: Routes = [
{  path:"\main-page",component:MainPageComponent},
{  path:"\examPage",component:ExamPageComponent,canActivate:[myAuthGaurd]},
{path:"**",redirectTo:"\main-page",pathMatch:"full"},
{path:"",redirectTo:"\main-page",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
