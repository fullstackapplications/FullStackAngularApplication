import { Injectable }  from '@angular/core';
// tslint:disable-next-line:import-spacing
import {HttpClient}    from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import {Subject}       from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WebService {


  BASE_URL = 'http://localhost:63145/api/';

  private messageStore: any = [];

  private messageSubject = new Subject();

  messages = this.messageSubject.asObservable();  // creates observable of the message subject

  getMessages(user?) {
      user = (user) ? '/' + user : '';
      this.http.get(this.BASE_URL + 'messages' + user).subscribe( response => {
        this.messageStore = response;
        this.messageSubject.next(this.messageStore);
      }, error => {
        this.handleErrors('Get message error - Unable to return messageStore, Error! ', error);
      });  // promise doesnt return no longer have to await
      console.log('After filtering :', this.messageStore);
  }

  async postMessage(message) {
    try {
      const response =  await this.http.post(this.BASE_URL + 'messages', message).toPromise();
      this.messageStore.push(response);   // response is already a json object
      this.messageSubject.next(this.messageStore);  // message store will get update to contain new message
      // return await this.http.post(this.BASE_URL, message);.toPromise()   //this version gives an error TODO
    } catch (err) {
      this.handleErrors('Post message error: ', err);
    }
  }


  // runs every time service is imported/accesses/used
  constructor(private http: HttpClient, private sb: MatSnackBar) {
    this.getMessages();
  }

  private handleErrors(message: string, object: any) {
    console.error(message, object);
    this.sb.open(message, 'close', {duration: 10000}); // displays error popup in site
  }
}
