import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tip2Component } from './tip2/tip2.component';
import { Tip3Component } from './tip3/tip3.component';
import { Tip4Component } from './tip4/tip4.component';
import { Tip5Component } from './tip5/tip5.component';

const routes: Routes = [
  { path: 'أهمية-متابعة-الحمل-مع-طبيبة', component: Tip2Component },
  { path: 'أعراض-الإجهاض', component: Tip3Component },
  { path: 'ضعف-المبايض', component: Tip4Component },
  { path: 'منشط-المبايض', component: Tip5Component },
  
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipsRoutingModule { }