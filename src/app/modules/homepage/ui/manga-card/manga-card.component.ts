import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Manga } from '../../../../shared/models/manga-type';

@Component({
  selector: 'app-manga-card',
  templateUrl: './manga-card.component.html',
  styleUrl: './manga-card.component.scss'
})
export class MangaCardComponent {

  @Input()
  mangaChild!: Manga;
  @Output() mangaClicked = new EventEmitter<Manga>();

  onMangaClick() {
    this.mangaClicked.emit(this.mangaChild);
  }
}
