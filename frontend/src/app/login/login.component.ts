import { Component, OnInit } from '@angular/core';
import {AuthService}         from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData = {
    email: '',
    password: '',
  }

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  login() {
    console.log(this.loginData);
    this.auth.login(this.loginData);
  }
}
