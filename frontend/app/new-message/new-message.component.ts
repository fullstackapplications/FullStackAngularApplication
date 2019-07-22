import {Component, EventEmitter, OnInit, Output} from '@angular/core';
// tslint:disable-next-line:import-spacing
import {WebService}                              from '../services/web.service';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css']
})
export class NewMessageComponent implements OnInit {

  // @Output() onPosted = new EventEmitter();

  constructor( private webService: WebService) { }


  message = {
    owner: 'test',
    text: '',
  };

  async post() {
    await this.webService.postMessage(this.message);
    // this.onPosted.emit(this.message);
    console.log('What we are trying to send to the api', this.message);
  }

  ngOnInit() {
  }

}
