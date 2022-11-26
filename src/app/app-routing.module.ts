import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComercialPerformanceComponent } from './pages/comercial-performance/comercial-performance.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

const routes: Routes = [
  {
    path:'home',
    pathMatch:'full',
    component: HomepageComponent
  },
  {
    path:'comercial',
    pathMatch:'full',
    component: ComercialPerformanceComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
