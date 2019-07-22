import { Injectable } from '@angular/core';
// tslint:disable-next-line:import-spacing
import {HttpClient}   from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
@Injectable({
  providedIn: 'root'
})
export class WebService {


  BASE_URL = 'http://localhost:63145/api/';

  messages: any = [];

  async getMessages() {
    try {
      const response = await this.http.get(this.BASE_URL + 'messages').toPromise();
      this.messages = response;
    } catch (error) {
      this.handleErrors('Get message error - Unable to return messages, Error! ', error);

    }
  }
  // TODO wtf :)
  async postMessage(message) {
    try {
      const response =  await this.http.post(this.BASE_URL + 'messages', message).toPromise();
      this.messages.push(response);   // response is already a json object
      // return await this.http.post(this.BASE_URL, message);.toPromise()   //this version gives an error TODO
    } catch (err) {
      this.handleErrors('Post message error: ', err);
    }
  }

  constructor(private http: HttpClient, private sb: MatSnackBar) {
    this.getMessages();
  }

  private handleErrors(message: string, object: any) {
    console.error(message, object);
    this.sb.open(message, 'close', {duration: 10000}); // displays error popup in site
  }
}
