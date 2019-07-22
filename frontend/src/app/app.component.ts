import {Component, ViewChild} from '@angular/core';
// import {MessagesComponent}    from './messages/messages.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // @ViewChild(MessagesComponent, {static: false}) messages: MessagesComponent;

  // onPosted(message) {
  //   console.log('Passed to parent from child(new-message)', message);
  //   this.messages.messages.push(message);
  // }

}
