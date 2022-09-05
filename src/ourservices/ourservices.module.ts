import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OurservicesRoutingModule } from './ourservices-routing.module';
import { NopainComponent } from './nopain/nopain.component';
import { PregnancyComponent } from './pregnancy/pregnancy.component';
import { FamilyplanningComponent } from './familyplanning/familyplanning.component';
import { ContraceptiveComponent } from './contraceptive/contraceptive.component';
import { ElayedchildbearingComponent } from './elayedchildbearing/elayedchildbearing.component';
import { MiscarriageComponent } from './miscarriage/miscarriage.component';


@NgModule({
  declarations: [
    NopainComponent,
    PregnancyComponent,
    FamilyplanningComponent,
    ContraceptiveComponent,
    ElayedchildbearingComponent,
    MiscarriageComponent
  ],
  imports: [
    CommonModule,
    OurservicesRoutingModule
  ]
})
export class OurservicesModule { }
