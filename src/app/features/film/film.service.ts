import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Film, Screening } from './film.model';


@Injectable({
    providedIn: 'root'
})
export class FilmService {
    private apiUrl = 'http://localhost:8080/api';

    constructor(private http: HttpClient) { }

    getAllFilms(): Observable<Film[]> {
        return this.http.get<Film[]>(`${this.apiUrl}/film`);
    }

    getFilmById(id: number): Observable<Film> {
        return this.http.get<Film>(`${this.apiUrl}/film/${id}`);
    }

    getScreeningsByFilmId(filmId: number): Observable<Screening[]> {
        return this.http.get<Screening[]>(`${this.apiUrl}/screenings/film/${filmId}`);
    }
}