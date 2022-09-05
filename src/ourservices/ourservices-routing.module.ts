import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContraceptiveComponent } from './contraceptive/contraceptive.component';
import { ElayedchildbearingComponent } from './elayedchildbearing/elayedchildbearing.component';
import { FamilyplanningComponent } from './familyplanning/familyplanning.component';
import { MiscarriageComponent } from './miscarriage/miscarriage.component';
import { NopainComponent } from './nopain/nopain.component';
import { PregnancyComponent } from './pregnancy/pregnancy.component';

const routes: Routes = [
  {path : 'ولادة-بدون-آلام',component: NopainComponent},
  {path : 'متابعة-الحمل',component: PregnancyComponent},
  {path : 'تنظيم-الأسرة',component: FamilyplanningComponent},
  {path : 'وسائل-منع-الحمل',component : ContraceptiveComponent},
  {path : 'تأخر-اللإنجاب',component: ElayedchildbearingComponent},
  {path : 'الإجهــــاض' ,component:MiscarriageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurservicesRoutingModule { }
