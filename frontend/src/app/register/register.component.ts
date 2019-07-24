import { Component, OnInit }     from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthService}             from '../services/auth.service';

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
    console.log('Form Errors', this.form.errors);
    this.Auth.register(this.form.value);

  }

  constructor(private fb: FormBuilder, private Auth: AuthService) {
    this.form = fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, this.emailValid()]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    }, { validator: this.matchingFields('password', 'confirmPassword')});
  }

  matchingFields(field1, field2) {
    return form => {
      if (form.controls[field1].value === form.controls[field2].value) {
        return true;
      } else {
        return { missMatched: true};  // creates property within the form.errors
      }
    };
  }

  emailValid() {
    return control => {
      const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regex.test(control.value) ? null : { invalidEmail : true};
    };
  }

  ngOnInit() {
  }

}
