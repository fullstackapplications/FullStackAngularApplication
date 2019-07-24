import { Injectable } from '@angular/core';
import {HttpClient}   from '@angular/common/http';
import {Router}       from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  BASE_URL = 'http://localhost:63145/auth/';
  NAME_KEY = 'name';
  TOKEN_KEY = 'token';


  constructor(private http: HttpClient,
              private router: Router) { }

  get isAuthenticated() {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  get name() {
    return localStorage.getItem(this.NAME_KEY);
  }

  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.NAME_KEY);

  }

  register(user) {
    delete user.confirmPassword;
    this.http.post(this.BASE_URL + 'register', user).subscribe( response => {
      const authResponse = response;
      // @ts-ignore
      if (!authResponse.token) {
        return null;
      }
      // @ts-ignore
      localStorage.setItem(this.TOKEN_KEY, authResponse.token);
      // @ts-ignore
      localStorage.setItem(this.NAME_KEY, authResponse.firstName);

      this.router.navigate(['/']);
    });
  }

  login(loginData) {

  }
}
