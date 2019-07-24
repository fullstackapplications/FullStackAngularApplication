import { Injectable } from '@angular/core';
import {HttpClient}   from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  BASE_URL = 'http://localhost:63145/auth/';

  constructor(private http: HttpClient) { }

  register(user) {
    delete user.confirmPassword;
    this.http.post(this.BASE_URL + 'register', user).subscribe( response => {
      // @ts-ignore
      localStorage.setItem('token', response.token);
    });
  }
}
