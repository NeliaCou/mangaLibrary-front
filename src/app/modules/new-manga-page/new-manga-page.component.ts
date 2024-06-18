import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MangaService } from '../../shared/services/manga.service';
import { Observable } from 'rxjs';
import { Manga } from '../../shared/models/manga-type';
import { UpdateMangaDTO } from '../../shared/models/update-manga-DTO';
import { LibraryService } from '../../shared/services/library.service';
import { Library } from '../../shared/models/library-type';

@Component({
  selector: 'app-new-manga-page',
  templateUrl: './new-manga-page.component.html',
  styleUrl: './new-manga-page.component.scss',
})
export class NewMangaPageComponent implements OnInit{
  manga$!: Observable<UpdateMangaDTO>;
  mangaId: number = 0;
  mangaTitle: string = '';
  mangaAuthor: string = '';
  mangaAvatar: string = '';
  mangaVolumeNumber: string = '';
  mangaLibrary: number = 0;
  libraries: Library[] = [];

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _mangaService: MangaService,
    private _libraryService: LibraryService
  ) {}

  ngOnInit() {
    this.loadLibraries();
  }

  loadLibraries() {
    this._libraryService.getAllLibraries().subscribe({
      next: (libraries) => (this.libraries = libraries),
      error: (error) => console.error(error),
      complete: () => console.info('Libraries loaded')
    });
  }

  onSubmit() {
    const newManga: UpdateMangaDTO = {
      id: this.mangaId,
      title: this.mangaTitle,
      author: this.mangaAuthor,
      avatar: this.mangaAvatar,
      volumeNumber: this.mangaVolumeNumber,
      libraryId: this.mangaLibrary,
    };

    this._mangaService.createManga(newManga).subscribe({
      next: () => this._router.navigate(['/']),
      error: (error) => console.error(error),
      complete: () => console.info('Manga created'),
    });
  }
}
