import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Screening } from "../models/screening";

@Injectable({
  providedIn: 'root'
})

export class ScreeningService  {   
  private apiUrl = 'http://localhost:8080/api/screening';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Screening>(this.apiUrl);
  }

  getFilmById(id: number) {
    return this.http.get<Screening>(`${this.apiUrl}/${id}`);
  } 



}