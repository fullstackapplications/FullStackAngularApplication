import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSnackBarModule, MatToolbarModule
}                                from '@angular/material';
import {MatCardModule}           from '@angular/material/card';

import {WebService}                       from './services/web.service';
import {HttpClient}                       from '@angular/common/http';
import {HttpClientModule}                 from '@angular/common/http';
import { NewMessageComponent }            from './new-message/new-message.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NavComponent }                   from './nav/nav.component';
import { HomeComponent }                  from './home/home.component';
import { RegisterComponent }              from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';

const routes = [];

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    NewMessageComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    UserComponent
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatButtonModule, MatCheckboxModule, MatCardModule, HttpClientModule, MatFormFieldModule, MatInputModule, MatIconModule, FormsModule, MatSnackBarModule, MatToolbarModule, ReactiveFormsModule],
  providers: [
    WebService,
    HttpClient,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
