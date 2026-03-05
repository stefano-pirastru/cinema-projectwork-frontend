import { Component, OnInit } from '@angular/core';
import { Review } from './review.model';
import { ReviewService } from './review.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-reviews',
  imports: [CommonModule, FormsModule],
  templateUrl: './reviews.components.html',
  styleUrls: ['./reviews.components.css']
})
export class ReviewsComponent implements OnInit {

  reviews: Review[] = [];

  newReview: Review = {
    rating: 0,
    comment: ''
  };

  filmId: number = 1; 

  constructor(private reviewService: ReviewService) {}

  ngOnInit(): void {
    this.loadReviews();
  }

  loadReviews() {
    this.reviewService.getReviewsByFilm(this.filmId)
      .subscribe(data => {
        this.reviews = data;
      });
  }

  submitReview() {
    this.reviewService.createReview(this.filmId, this.newReview)
      .subscribe(() => {
        this.loadReviews();
        this.newReview = { rating: 0, comment: '' };
      });
  }

}