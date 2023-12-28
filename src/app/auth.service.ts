import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendor } from 'src/model/vendor';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000'; // Assicurati di utilizzare l'URL corretto del tuo server JSON

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<Vendor> {
    const loginData = { email, password };
    
    return this.http.get<Vendor>(`${this.apiUrl}/vendors`, { params: loginData });
  }
  
  
}
