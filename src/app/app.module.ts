import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxCaptureModule } from 'ngx-capture';
import { HomeComponent } from './pages/home/home.component';
import {  HttpClientModule } from '@angular/common/http';
import { ImageModalComponent } from './pages/image-modal/image-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ImageModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxCaptureModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
