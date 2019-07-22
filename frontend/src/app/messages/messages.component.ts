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

  constructor( private webService: WebService,
               private  route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.snapshot.params.name);
  }
}
