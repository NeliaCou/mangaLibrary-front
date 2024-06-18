import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { Library } from '../models/library-type';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  private readonly _BASE_URL = environment.baseUrl + '/libraries';

  constructor(private _http: HttpClient) { }

  getAllLibraries(): Observable<Library[]> {
    return this._http.get<Library[]>(this._BASE_URL + `/get/all`);
  }

  getLibraryById(id: number): Observable<Library> {
    return this._http.get<Library>(this._BASE_URL + `/get/${id}`);
  }

  createLibrary(library: Library): Observable<Library> {
    return this._http.post<Library>(this._BASE_URL + `/add`, library);
  }

  updateLibrary(id: number, library: Library): Observable<Library> {
    return this._http.put<Library>(this._BASE_URL + `/update/${id}`, library);
  }

  deleteLibrary(id: number): Observable<void> {
    return this._http.delete<void>(this._BASE_URL + `/delete/${id}`);
  }
}
