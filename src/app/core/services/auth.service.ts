import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, tap } from 'rxjs';

type JwtRolePayload = {
  role?: string;
  roles?: string[];
  authorities?: Array<string | { authority?: string }> | string;
  scope?: string;
  scp?: string[] | string;
};

type LoginResponse = {
  token: string;
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:8080/api/auth';

  login(email: string, password: string): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(`${this.apiUrl}/login`, { email, password })
      .pipe(tap((response) => localStorage.setItem('token', response.token)));
  }

  register(data: unknown): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/register`, data);
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return Boolean(localStorage.getItem('token'));
  }

  getTokenPayload(): JwtRolePayload | null {
    const token = localStorage.getItem('token');
    if (!token) return null;

    try {
      const payload = token.split('.')[1];
      if (!payload) return null;
      const base64 = payload.replace(/-/g, '+').replace(/_/g, '/');
      const padded = base64.padEnd(base64.length + ((4 - (base64.length % 4)) % 4), '=');
      return JSON.parse(atob(padded)) as JwtRolePayload;
    } catch {
      return null;
    }
  }

  isAdmin(): boolean {
    const payload = this.getTokenPayload();
    if (!payload) return false;

    const adminLabels = new Set(['ROLE_ADMIN', 'ADMIN']);
    const rawValues: string[] = [];

    if (Array.isArray(payload.roles)) {
      rawValues.push(...payload.roles);
    }

    if (Array.isArray(payload.authorities)) {
      for (const item of payload.authorities) {
        if (typeof item === 'string') {
          rawValues.push(item);
        } else if (item?.authority) {
          rawValues.push(item.authority);
        }
      }
    } else if (typeof payload.authorities === 'string') {
      rawValues.push(payload.authorities);
    }

    if (typeof payload.role === 'string') {
      rawValues.push(payload.role);
    }

    if (typeof payload.scope === 'string') {
      rawValues.push(...payload.scope.split(' '));
    }

    if (Array.isArray(payload.scp)) {
      rawValues.push(...payload.scp);
    } else if (typeof payload.scp === 'string') {
      rawValues.push(payload.scp);
    }

    return rawValues.some((value) => adminLabels.has(value));
  }
}
