import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { DownloadsComponent } from './components/downloads/downloads.component';
import { AdmissionComponent } from './components/admission/admission.component';
import { ApplyComponent } from './components/apply/apply.component';
import { SliderComponent } from './components/slider/slider.component';
import { StaffComponent } from './components/staff/staff.component';
import { ProgramDetailComponent } from './components/program-detail/program-detail.component';

const routes: Routes = [
  {
    path:'home',component:HomeComponent
  },
  {
    path:'about',component:AboutComponent
  },
  {
    path:'services',component:ServicesComponent
  },
  {
    path:'staff',component:StaffComponent
  },
  {
    path:'downloads',component:DownloadsComponent
  },
  {
    path:'admission',component:AdmissionComponent
  },
  {
    path:'apply',component:ApplyComponent
  },
  {
    path:'programDetail',component:ProgramDetailComponent
  },
  {
    path:'**',redirectTo:'home', pathMatch: 'prefix'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
