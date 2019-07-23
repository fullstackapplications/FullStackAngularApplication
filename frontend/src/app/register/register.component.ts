import { Component, OnInit } from '@angular/core';
import {FormBuilder}         from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form;

  onSubmit() {
    console.log(this.form.value);
  }

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmpassword: '',
    });
  }

  ngOnInit() {
  }

}
