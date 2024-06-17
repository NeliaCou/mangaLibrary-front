import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { Manga } from '../models/manga-type';

@Injectable({
  providedIn: 'root'
})
export class MangaService {

  private readonly _BASE_URL = environment.baseUrl + '/mangas';

  constructor(private _http: HttpClient) { }

  getAllMangas(): Observable<Manga[]> {
    return this._http.get<Manga[]>(this._BASE_URL + `/get/all`);
  }

  getMangaById(id: number): Observable<Manga> {
    return this._http.get<Manga>(this._BASE_URL + `/get/${id}`);
  }

  getMangasByGenre(genre: string): Observable<Manga[]> {
    return this._http.get<Manga[]>(this._BASE_URL + `/genre/${genre}`);
  }

  createManga(manga: Manga): Observable<Manga> {
    return this._http.post<Manga>(this._BASE_URL + `/add`, manga);
  }

  updateManga(id: number, manga: Manga): Observable<Manga> {
    return this._http.put<Manga>(this._BASE_URL + `/update/${id}`, manga);
  }

  deleteManga(id: number): Observable<void> {
    return this._http.delete<void>(this._BASE_URL + `/delete/${id}`);
  }
}
