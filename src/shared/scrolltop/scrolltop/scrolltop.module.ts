import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrolltopRoutingModule } from './scrolltop-routing.module';
import { ScrolltopComponent } from './scrolltop.component';

@NgModule({
  declarations: [ScrolltopComponent],
  imports: [
    CommonModule,
    ScrolltopRoutingModule
  ],
  exports: [ScrolltopComponent]
})
export class ScrolltopModule { }
