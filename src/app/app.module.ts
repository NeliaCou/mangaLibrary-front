import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './modules/homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SearchPageComponent } from './modules/search-page/search-page.component';
import { MangaPageComponent } from './modules/manga-page/manga-page.component';
import { AddMangaPageComponent } from './modules/add-manga-page/add-manga-page.component';
import { ErrorComponent } from './modules/error/error.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SearchPageComponent,
    MangaPageComponent,
    AddMangaPageComponent,
    ErrorComponent
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
