import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpService } from './http.service'







@NgModule({
  declarations: [],
  imports: [
    CommonModule,,
    HttpService,
  ],
  exports: [
    HttpService,



  ]
})
export class ServicesModule { }
