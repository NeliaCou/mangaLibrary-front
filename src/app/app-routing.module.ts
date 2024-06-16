import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './modules/homepage/homepage.component';
import { ErrorComponent } from './modules/error/error.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/homepage', 
    pathMatch: 'full'
  },
  {
    path: 'homepage', 
    component: HomepageComponent
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
