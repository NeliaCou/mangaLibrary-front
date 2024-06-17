import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './modules/homepage/feature/homepage.component';
import { ErrorComponent } from './modules/error/error.component';
import { MangaPageComponent } from './modules/manga-page/manga-page.component';
import { AddMangaPageComponent } from './modules/add-manga-page/add-manga-page.component';
import { NewMangaPageComponent } from './modules/new-manga-page/new-manga-page.component';

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
    path: 'my-manga',
    component: MangaPageComponent
  },
  {
    path: 'add-manga',
    component: AddMangaPageComponent
  },
  {
    path: 'new-manga',
    component: NewMangaPageComponent
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
