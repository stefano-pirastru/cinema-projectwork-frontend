import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Film } from "./film.model";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'   // 👈 THIS IS IMPORTANT
})
export class FilmService {
    private apiUrl = 'http://localhost:8080/api/film';
    constructor(private http: HttpClient) { }

    getAllFilm(): Observable<Film[]> {
        return this.http.get<Film[]>(this.apiUrl);
    }

    getFilmById(id: number): Observable<Film[]> {
        return this.http.get<Film[]>(`${this.apiUrl}/${id}`);
    }

}