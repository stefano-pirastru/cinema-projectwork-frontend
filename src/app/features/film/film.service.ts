import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from './film.model';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:8080/api/film';

  getAllFilm(): Observable<Film[]> {
    return this.http.get<Film[]>(this.apiUrl);
  }

  getFilmById(id: number): Observable<Film> {
    return this.http.get<Film>(`${this.apiUrl}/${id}`);
  }
}
