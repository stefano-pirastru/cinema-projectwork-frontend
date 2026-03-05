import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) {}
  //metodo per inviare email e password al backend per fare la login
  //se la risposta contiene il JWT, lo salva nel localStorage(quando ti logghi il browser salva il token al suo interno per richieste future) 
  //il metodo pipe() serve per intercettare il token (risposta del server) e il metodo tap() prende il token e salva la risposta nel browser (sessione)
  login(email: string, password: string) {
    return this.http.post<any>(`${this.apiUrl}/login`, {
      email,
      password
    }).pipe(
      tap(response => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('email', response.email);
        localStorage.setItem('firstName', response.firstName);
        localStorage.setItem('userId', response.id);
        localStorage.setItem('role', response.role);
      })
    );
  }

  register(data: any) {
    return this.http.post(`${this.apiUrl}/register`, data);
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}