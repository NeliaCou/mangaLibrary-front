import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MangaService } from '../../shared/services/manga.service';
import { Observable } from 'rxjs';
import { Manga } from '../../shared/models/manga-type';
import { UpdateMangaDTO } from '../../shared/models/update-manga-DTO';

@Component({
  selector: 'app-new-manga-page',
  templateUrl: './new-manga-page.component.html',
  styleUrl: './new-manga-page.component.scss'
})
export class NewMangaPageComponent {

  manga$!: Observable<UpdateMangaDTO>;
  mangaId: number = 0;
  mangaTitle: string = '';
  mangaAuthor: string = '';
  mangaAvatar: string = '';
  mangaVolumeNumber: string = '';
  mangaLibrary: number = 0;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _mangaService: MangaService
  ) {}

  onSubmit() {
    const newManga: UpdateMangaDTO = {
      id: this.mangaId,
      title: this.mangaTitle,
      author: this.mangaAuthor,
      avatar: this.mangaAvatar,
      volumeNumber: this.mangaVolumeNumber,
      libraryId: this.mangaLibrary
    };
  
    this._mangaService.createManga(newManga).subscribe(
      (createdManga: Manga) => {
        this._router.navigate(['/']);
      },
      (error) => {
        console.error('Erreur lors de la création du manga :', error);
      }
    );
  }
}
