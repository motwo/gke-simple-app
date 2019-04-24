import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  get(): Observable<string> {
    const httpOptions = {
      headers: new HttpHeaders({
        // 'Content-Type':  'application/x-www-form-urlencoded',
        'Content-Type': 'application/json',
      })
    };
    return this.http.get<string>('http://api', httpOptions);
    // return this.http.get<string>('http://34.96.77.58', httpOptions);
  }
}
