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

import {WebService}            from './services/web.service';
import {HttpClient}            from '@angular/common/http';
import {HttpClientModule}      from '@angular/common/http';
import { NewMessageComponent } from './new-message/new-message.component';
import {FormsModule}           from '@angular/forms';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    NewMessageComponent,
    NavComponent
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatButtonModule, MatCheckboxModule, MatCardModule, HttpClientModule, MatFormFieldModule, MatInputModule, MatIconModule, FormsModule, MatSnackBarModule, MatToolbarModule],
  providers: [
    WebService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
