import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MangaService } from '../../shared/services/manga.service';
import { Manga } from '../../shared/models/manga-type';

@Component({
  selector: 'app-manga-page',
  templateUrl: './manga-page.component.html',
  styleUrl: './manga-page.component.scss'
})
export class MangaPageComponent {
  manga!: Manga;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mangaService: MangaService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const id = params['id'];
      this.mangaService.getMangaById(id).subscribe(manga => {
        this.manga = manga;
      });
    });
  }

  onDeleteManga(): void {
    if (this.manga && this.manga.id) {
      this.mangaService.deleteManga(this.manga.id).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}