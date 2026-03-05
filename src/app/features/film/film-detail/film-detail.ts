import { Component, OnInit } from '@angular/core';
import { Film, Screening } from '../film.model';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FilmService } from '../film.service';
import { CommonModule } from '@angular/common';
import { BookingService } from '../../bookings/booking.service';

@Component({
  selector: 'app-film-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './film-detail.html',
  styleUrls: ['./film-detail.css']
})
export class FilmDetail implements OnInit {
  film?: Film;
  screenings: Screening[] = [];
  bookingMessage: string = '';
  userId: number = 1; // Hardcoded for demonstration
  trackByScreeningId(index: number, screening: Screening): number {
    return screening.id;
  }
  constructor(
    private route: ActivatedRoute,
    private filmService: FilmService,
    private bookingService: BookingService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.filmService.getFilmById(id).subscribe(data => {
        this.film = data;
      });

      this.filmService.getScreeningsByFilmId(id).subscribe(data => {
        this.screenings = data;
      });
    }
  }

  bookTicket(screening: Screening): void {
    const price = (screening as any).basePrice;
    if (!confirm(`Book ticket for ${this.film?.title} at ${screening.screeningTime} for $${price}?`)) return;

    const bookingRequest = {
      userId: this.userId,
      screeningId: screening.id,
      totalPrice: price
    };

    this.bookingService.createBooking(bookingRequest).subscribe({
      next: () => this.bookingMessage = 'Booking successful!',
      error: (err) => this.bookingMessage = 'Booking failed. Please try again.'
    });
  }
}
