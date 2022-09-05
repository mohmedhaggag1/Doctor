import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctaoAyaComponent } from './doctao-aya/doctao-aya.component';

const routes: Routes = [
  {path: '', component: DoctaoAyaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutdoctorRoutingModule { }
