import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Hall } from './hall.model';

@Injectable({
  providedIn: 'root'
})
export class HallService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:8080/api/halls';

  getAll(): Observable<Hall[]> {
    return this.http.get<Hall[]>(this.apiUrl);
  }
}
