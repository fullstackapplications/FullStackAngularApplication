import { Injectable }            from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router}                  from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  BASE_URL = 'http://localhost:63145/auth/';
  NAME_KEY = 'name';
  TOKEN_KEY = 'token';


  constructor(private http: HttpClient,
              private router: Router,
              ) { }

  get isAuthenticated() {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  get name() {
    return localStorage.getItem(this.NAME_KEY);
  }

  get tokenHeader() {
    // const header = new Headers({Authorization: 'Bearer ' + localStorage.getItem(this.TOKEN_KEY)});
    // return new HttpHeaders({'headers': header});   // Deprecated so idk :) maybe the thing on bottom of this works ?

    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem(this.TOKEN_KEY)
    });

    const httpOptions = {
      // headers: new HttpHeaders({
      //   'Content-Type': 'application/json',
      //   Authorization: 'Bearer ' + localStorage.getItem(this.TOKEN_KEY)
      // })
      headers,
    };



    return httpOptions;
  }

  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.NAME_KEY);

  }

  register(user) {
    delete user.confirmPassword;
    this.http.post(this.BASE_URL + 'register', user).subscribe( response => {
      this.authenticate(response);
    });
  }

  login(loginData) {
    this.http.post(this.BASE_URL + 'login', loginData).subscribe( response => {
      this.authenticate(response);
      console.log(response);
    });
  }

  authenticate(response) {
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
  }
}
