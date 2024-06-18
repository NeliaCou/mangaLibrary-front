import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './modules/homepage/feature/homepage.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SearchPageComponent } from './modules/search-page/search-page.component';
import { MangaPageComponent } from './modules/manga-page/manga-page.component';
import { ErrorComponent } from './modules/error/error.component';
import { SharedModule } from './shared/shared.module';
import { MangaCardComponent } from './modules/homepage/ui/manga-card/manga-card.component';
import { NewMangaPageComponent } from './modules/new-manga-page/new-manga-page.component';
import { EditMangaPageComponent } from './modules/edit-manga-page/edit-manga-page.component';
import { AllMangaPageComponent } from './modules/all-manga-page/all-manga-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SearchPageComponent,
    MangaPageComponent,
    ErrorComponent,
    MangaCardComponent,
    NewMangaPageComponent,
    EditMangaPageComponent,
    AllMangaPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
