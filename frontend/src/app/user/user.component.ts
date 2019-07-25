import { Component, OnInit } from '@angular/core';
import {WebService}          from '../services/web.service';
import {AuthService}         from '../services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor( private webService: WebService,
               private auth: AuthService) { }


  model = {
    firstName: this.auth.name,
    lastName: '',
  };

  async post() {
    await this.webService.saveUser(this.model).subscribe();
    // this.onPosted.emit(this.message);
    console.log('What we are trying to send to the api', this.model);
  }

  ngOnInit() {
    this.webService.getUser().subscribe( res => {
      // @ts-ignore
      this.model.firstName = res.firstName;
      // @ts-ignore
      this.model.lastName = res.lastName;
    });
  }

}
