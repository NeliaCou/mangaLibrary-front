import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MangaService } from '../../shared/services/manga.service';
import { Manga } from '../../shared/models/manga-type';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-edit-manga-page',
  templateUrl: './edit-manga-page.component.html',
  styleUrl: './edit-manga-page.component.scss'
})
export class EditMangaPageComponent implements OnInit{

  manga$!: Observable<Manga>;
  mangaTitle: string = '';
  mangaAuthor: string = '';
  mangaVolumeNumber: string = '';

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _mangaService: MangaService
  ) {}

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      const id = +params['id'];
      if (id) {
        this.manga$ = this._mangaService.getMangaById(id);
        this.manga$.subscribe(manga => {
          this.mangaTitle = manga.title;
          this.mangaAuthor = manga.author;
          this.mangaVolumeNumber = manga.volumeNumber;
        });
      }
    });
  }

  onSubmit(): void {
    this.manga$.pipe(
      switchMap(manga => {
        manga.title = this.mangaTitle;
        manga.author = this.mangaAuthor;
        manga.volumeNumber = this.mangaVolumeNumber;
        return this._mangaService.updateManga(manga.id, manga);
      })
    ).subscribe(
      updatedManga => {
        this._router.navigate(['/my-manga'], { queryParams: { id: updatedManga.id } });
      },
      error => {
        console.error('Error updating manga:', error);
      }
    );
  }
}