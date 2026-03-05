import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Review } from './review.model';


@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private api = 'http://localhost:8080/api/reviews';

  constructor(private http: HttpClient) {}

  getReviewsByFilm(filmId: number): Observable<Review[]> {
    return this.http.get<Review[]>(`${this.api}/${filmId}`);
  }

  createReview(filmId: number, review: Review): Observable<Review> {
    return this.http.post<Review>(`${this.api}/${filmId}`, review);
  }

}