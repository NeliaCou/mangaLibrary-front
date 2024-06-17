import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Manga } from '../../../shared/models/manga-type';
import { ActivatedRoute, Router } from '@angular/router';
import { MangaService } from '../../../shared/services/manga.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit{

  mangas$!: Observable<Manga[]>;
  shojo: string = 'assets/shojo.jpg';

  constructor(
    private _router: Router,
    private _mangaService: MangaService,
  ){}

  ngOnInit(): void {
    this.mangas$ = this._mangaService.getAllMangas().pipe(
      tap(mangas => console.log('Mangas récupérés:', mangas))
    );
  }

  onMangaCardClicked(manga: Manga) {
    this._router.navigate(['/my-manga'], { queryParams: { id: manga.id } });
  }

  onCreateManga() {
    this._router.navigate(['/new-manga'])
  }
}
