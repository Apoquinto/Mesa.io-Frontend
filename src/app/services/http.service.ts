import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private httpClient = inject(HttpClient);
  private baseUrl = '';
  private headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });  

  constructor() { }

  get(url: string, params?: any) {
    return this.httpClient.get(`${this.baseUrl}${url}`, { params, headers: this.headers })
      .pipe(
        catchError((error) => {
          return throwError(() => new Error(`Failed sending get request to ${this.baseUrl}${url}`));
        })
      );
  }

  post(url: string, body: any) {
    return this.httpClient.post(`${this.baseUrl}${url}`, body, { headers: this.headers })
      .pipe(
        catchError((error) => {
          return throwError(() => new Error(`Failed sending post request to ${this.baseUrl}${url}`));
        })
      );
  }

  put(url: string, body: any) {
    return this.httpClient.put(`${this.baseUrl}${url}`, body, { headers: this.headers })
      .pipe(
        catchError((error) => {
          return throwError(() => new Error(`Failed sending put request to ${this.baseUrl}${url}`));
        })
      );
  }

  delete(url: string) {
    return this.httpClient.delete(`${this.baseUrl}${url}`, { headers: this.headers })
      .pipe(
        catchError((error) => {
          return throwError(() => new Error(`Failed sending delete request to ${this.baseUrl}${url}`));
        })
      );
  }
}