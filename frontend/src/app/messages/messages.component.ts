import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line:import-spacing
import {WebService}          from '../services/web.service';
import {ActivatedRoute}      from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // messages;

  constructor( private webService: WebService,
               private  route: ActivatedRoute) { }


  // anything loaded using messages, reloads with filter
  ngOnInit() {
    const name =  this.route.snapshot.params.name;
    this.webService.getMessages(name);
    // this.webService.messages.subscribe( messages => {
    //   this.messages = messages;
    // });
  }
}
