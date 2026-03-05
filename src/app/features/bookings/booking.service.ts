import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Booking, BookingRequest } from './bookings';

@Injectable({
    providedIn: 'root'
})
export class BookingService {
    private apiUrl = 'http://localhost:8080/api/bookings';

    constructor(private http: HttpClient) { }

    createBooking(booking: BookingRequest): Observable<Booking> {
        return this.http.post<Booking>(`${this.apiUrl}/`, booking);
    }
}