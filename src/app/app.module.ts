import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {CreateComponent} from './create.component'

@NgModule({
  imports:      [ BrowserModule, FormsModule,ReactiveFormsModule,HttpClientModule],
  declarations: [ AppComponent, HelloComponent,CreateComponent],
  bootstrap:    [ CreateComponent ]

 
})
export class AppModule { }
