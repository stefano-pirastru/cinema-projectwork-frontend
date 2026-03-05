import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Screening } from './screening.model';

@Injectable({
  providedIn: 'root'
})
export class ScreeningService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:8080/api/screenings';

  getByDate(date: string): Observable<Screening[]> {
    return this.http
      .get<Screening[] | Screening | null>(`${this.apiUrl}/date?date=${date}`)
      .pipe(map((response) => (Array.isArray(response) ? response : response ? [response] : [])));
  }

  create(screening: Screening): Observable<Screening> {
    return this.http.post<Screening>(this.apiUrl, screening);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
