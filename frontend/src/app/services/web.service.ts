import { Injectable } from '@angular/core';
// tslint:disable-next-line:import-spacing
import {HttpClient}   from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WebService {

  getMessages() {
    return this.http.get('http://localhost:63145/api/messages').toPromise();
  }

  constructor(private http: HttpClient) {

  }
}
