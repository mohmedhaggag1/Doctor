import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tip1Component } from './tip1/tip1.component';
import { Tip2Component } from './tip2/tip2.component';
import { Tip3Component } from './tip3/tip3.component';
import { AppRoutingModule } from '../app-routing.module';
import { Tip4Component } from './tip4/tip4.component';
import { Tip5Component } from './tip5/tip5.component';

@NgModule({
  declarations: [
    Tip1Component,
    Tip2Component,
    Tip3Component,
    Tip4Component,
    Tip5Component
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  // عملتها عشان اقدر اشوف الكومبوننت دي بره الموديول ده 
  exports: [
    Tip1Component,
    Tip2Component,
    Tip3Component,
    Tip4Component,
    Tip5Component
  ]
})
export class TipsModule { }
