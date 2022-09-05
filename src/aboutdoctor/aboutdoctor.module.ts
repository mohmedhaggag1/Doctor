import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutdoctorRoutingModule } from './aboutdoctor-routing.module';
import { DoctaoAyaComponent } from './doctao-aya/doctao-aya.component';


@NgModule({
  declarations: [
    DoctaoAyaComponent
  ],
  imports: [
    CommonModule,
    AboutdoctorRoutingModule
  ]
})
export class AboutdoctorModule { }
