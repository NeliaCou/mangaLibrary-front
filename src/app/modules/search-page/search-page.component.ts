import { Component, EventEmitter, Output } from '@angular/core';
import { Manga } from '../../shared/models/manga-type';
import { MangaService } from '../../shared/services/manga.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss'
})
export class SearchPageComponent {

  @Output() 
  emitChanges: EventEmitter<string> = new EventEmitter<string>();

  searchedValue: string = "";
  searchResults: Manga[] = [];

  constructor(private mangaService: MangaService) {}

  ngOnInit(): void {}

  onChange(value: string): void {
    this.emitChanges.emit(this.searchedValue);
    if (this.searchedValue.length > 0) { 
      this.mangaService.getMangaByTitle(this.searchedValue).subscribe(
        (results: Manga[]) => {
          this.searchResults = results;
        },
        error => {
          console.error('Error fetching search results:', error);
        }
      );
    } else {
      this.searchResults = [];
    }
  }
}
