import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Film } from "../models/film";


@Injectable({
  providedIn: 'root'
})

export class FilmService  {   
  private apiUrl = 'http://localhost:8080/api/film';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Film>(this.apiUrl);
  }

  getFilmById(id: number) {
    return this.http.get<Film>(`${this.apiUrl}/${id}`);
  } 



}