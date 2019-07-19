import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line:import-spacing
import {WebService}          from '../services/web.service';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css']
})
export class NewMessageComponent implements OnInit {

  constructor( private webService: WebService) { }


  message = {
    owner: 'test',
    text: '',
  };

  post() {

    console.log(this.message);
  }

  ngOnInit() {
  }

}
