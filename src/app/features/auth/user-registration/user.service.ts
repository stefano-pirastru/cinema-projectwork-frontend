import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterRequest } from './user.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:8080/api/auth'; // controlla che AuthController abbia @RequestMapping("/api/auth")

  register(payload: RegisterRequest): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/register`, payload);
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }
}