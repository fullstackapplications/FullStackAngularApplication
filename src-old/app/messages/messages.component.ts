import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line:import-spacing
import {WebService}          from '../services/web.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor( private webService: WebService) { }

  // tslint:disable-next-line:ban-types
  messages: Object = [];

  async ngOnInit() {
    const response = await this.webService.getMessages();
    console.log('This is the response we are getting back: ', response);
    this.messages = response;
  }
}
