import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-bookings',
  imports: [],
  templateUrl: './bookings.html',
  styleUrl: './bookings.css',
})
export class Bookings {

  private apiUrl = 'http://localhost:8080/api/bookings';

  constructor(private http: HttpClient) { }


}
