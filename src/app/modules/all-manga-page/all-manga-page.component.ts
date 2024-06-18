import { Component, OnInit } from '@angular/core';
import { Manga } from '../../shared/models/manga-type';
import { MangaService } from '../../shared/services/manga.service';

@Component({
  selector: 'app-all-manga-page',
  templateUrl: './all-manga-page.component.html',
  styleUrl: './all-manga-page.component.scss'
})
export class AllMangaPageComponent implements OnInit {
  shojos: Manga[] = [];
  shonens: Manga[] = [];
  joseis: Manga[] = [];

  [key: string]: any;
  
  constructor(private _mangaService: MangaService) {}

  ngOnInit(): void {
    this.getMangasByGenre('Shojo', 'shojos');
    this.getMangasByGenre('Shonen', 'shonens');
    this.getMangasByGenre('Josei', 'joseis');
  }

  getMangasByGenre(genre: string, targetProperty: string): void {
    this._mangaService.getMangasByGenre(genre).subscribe(mangas => {
      this[targetProperty] = mangas;
    });
  }
}
