import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent}          from './home/home.component';
import {MessagesComponent}      from './messages/messages.component';
import {RegisterComponent}      from './register/register.component';
import {LoginComponent}         from './login/login.component';


const routes: Routes =
  [
    {path: '', component: HomeComponent},
    {path: 'messages', component: MessagesComponent},
    {path: 'messages/:name', component: MessagesComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
