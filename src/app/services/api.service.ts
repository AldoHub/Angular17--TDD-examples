import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, firstValueFrom } from 'rxjs';

export interface User {
  _id: string;
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  image: string;
  password: string;
}

type ApiResponse = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  results: User[];
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'https://peticiones.online/api/users';

  private httpClient = inject(HttpClient);

  getSimpleValue(text: string): string {
    return text.toUpperCase();
  }

  getUsers(): Observable<ApiResponse> {
    return this.httpClient.get<ApiResponse>(this.baseUrl);
  }

  getUsersProm(): Promise<ApiResponse> {
    return firstValueFrom(
      this.httpClient.get<ApiResponse>(this.baseUrl)
    );
  }

}