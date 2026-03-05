// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { FilmService } from './film.service';
// import { BookingService } from '../bookings/booking.service';
// import { Film, Screening } from './film.model';


// @Component({
//     selector: 'app-film-list',
//     standalone: true,
//     imports: [CommonModule, FormsModule],
//     templateUrl: './film-list.component.html',
//     styleUrls: ['./film-list.component.css']
// })
// export class FilmListComponent implements OnInit {
//     films: Film[] = [];
//     selectedFilm: Film | null = null;
//     screenings: Screening[] = [];

//     // Hardcoded user ID for demonstration since Auth is not in context
//     userId: number = 1;
//     bookingMessage: string = '';

//     constructor(
//         private filmService: FilmService,
//         private bookingService: BookingService
//     ) { }

//     ngOnInit(): void {
//         this.loadFilms();
//     }

//     loadFilms(): void {
//         this.filmService.getAllFilms().subscribe({
//             next: (data) => this.films = data,
//             error: (err) => console.error('Error fetching films', err)
//         });
//     }

//     selectFilm(film: Film): void {
//         this.selectedFilm = film;
//         this.bookingMessage = '';
//         this.filmService.getScreeningsByFilmId(film.id).subscribe({
//             next: (data) => this.screenings = data,
//             error: (err) => console.error('Error fetching screenings', err)
//         });
//     }

//     bookScreening(screening: Screening): void {
//         if (!confirm(`Book ticket for ${this.selectedFilm?.title} at ${screening.screeningTime}?`)) return;

//         const bookingRequest = {
//             userId: this.userId,
//             screeningId: screening.id,
//             totalPrice: 12.50 // Example fixed price, logic can be expanded
//         };

//         this.bookingService.createBooking(bookingRequest).subscribe({
//             next: (res) => {
//                 this.bookingMessage = `Booking successful! Booking ID: ${res.id}`;
//                 this.selectedFilm = null; // Return to list
//             },
//             error: (err) => {
//                 this.bookingMessage = 'Booking failed. Please try again.';
//                 console.error(err);
//             }
//         });
//     }
// }