import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './modules/homepage/feature/homepage.component';
import { ErrorComponent } from './modules/error/error.component';
import { MangaPageComponent } from './modules/manga-page/manga-page.component';
import { NewMangaPageComponent } from './modules/new-manga-page/new-manga-page.component';
import { EditMangaPageComponent } from './modules/edit-manga-page/edit-manga-page.component';
import { AllMangaPageComponent } from './modules/all-manga-page/all-manga-page.component';
import { SearchPageComponent } from './modules/search-page/search-page.component';

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
    path: 'edit-manga/:id',
    component: EditMangaPageComponent
  },
  {
    path: 'new-manga',
    component: NewMangaPageComponent
  },
  {
    path: 'all-manga',
    component: AllMangaPageComponent
  },
  {
    path: 'search',
    component: SearchPageComponent
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
