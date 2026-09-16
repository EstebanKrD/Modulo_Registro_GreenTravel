import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AuthResponse } from '../../models/auth/auth-response.model';
import { RegisterRequest } from '../../models/auth/register-request.model';

/**
 * Se comunica únicamente con el recurso de autenticación.
 * Hoy el backend solo expone POST /api/v1/auth/register (ver /v3/api-docs).
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly authUrl = `${environment.apiUrl}/api/v1/auth`;

  constructor(private readonly http: HttpClient) {}

  register(request: RegisterRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.authUrl}/register`, request);
  }
}
