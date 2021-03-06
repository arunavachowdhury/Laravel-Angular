import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JarwisService {

  private baseUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  signup(data){
    return this.http.post(`${this.baseUrl}/signup`, data)
  }

  login(data){
    return this.http.post(`${this.baseUrl}/login`, data)
  }

  sendPasswordResetLink(email){
    return this.http.post(`${this.baseUrl}/sendPasswordResetLink`, email)
  }

  changePassword(data){
    return this.http.post(`${this.baseUrl}/changePassword`, data)
  }
}
