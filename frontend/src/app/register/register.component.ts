import { Component, OnInit }     from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form;

  onSubmit() {
    console.log('Values detected in form : ', this.form.value);
    console.log('Is the form valid?', this.form.valid);
  }

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

}
