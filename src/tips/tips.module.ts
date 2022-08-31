import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipsRoutingModule } from './tips-routing.module';
import { Tip2Component } from './tip2/tip2.component';
import { Tip3Component } from './tip3/tip3.component';
import { Tip4Component } from './tip4/tip4.component';
import { Tip5Component } from './tip5/tip5.component';

@NgModule({
  declarations: [
    Tip2Component,
    Tip3Component,
    Tip4Component,
    Tip5Component,
  ],
  imports: [
    CommonModule,
    TipsRoutingModule
  ]
})
export class TipsModule { }
