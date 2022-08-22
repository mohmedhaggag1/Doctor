import { ContactUsComponent } from './contact-us/contact-us.component';
import { TipsModule } from 'src/tips/tips.module';
import { SpecialtyComponent } from './specialty/specialty.component';
import { HomeComponent } from 'src/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Tip1Component } from './tips/tip1/tip1.component';
import { Tip2Component } from './tips/tip2/tip2.component';
import { Tip3Component } from './tips/tip3/tip3.component';
import { Tip4Component } from './tips/tip4/tip4.component';
import { Tip5Component } from './tips/tip5/tip5.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about-DrAya', component: HomeComponent },
  { path: 'contactUs', component: ContactUsComponent },
  { path: 'tip1', component: Tip1Component },
  { path: 'أهمية-متابعة-الحمل-مع-طبيبة', component: Tip2Component },
  { path: 'أعراض-الإجهاض', component: Tip3Component },
  { path: 'ضعف-المبايض', component: Tip4Component },
  { path: 'منشط-المبايض', component: Tip5Component },



];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
